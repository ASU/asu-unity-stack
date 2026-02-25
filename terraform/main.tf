module "product-tags" {
  source  = "jfrog-cloud.devops.asu.edu/asu-terraform-modules__dco-terraform/product-tags/null"
  version = "~>1.5"
  product_key            = var.product_key
  technical_contact      = var.technical_contact
  administrative_contact = var.administrative_contact
  environment            = var.environment
  repository_url         = var.repository_url
  components             = var.components
}

provider "aws" {
  region = var.aws_region
}

data "aws_s3_bucket" "static_site_bucket" {
  bucket = var.s3_bucket_name
}

# Read CloudFront domain from SSM (written by terraform/static-site/)
data "aws_ssm_parameter" "cloudfront_domain" {
  name = "/unity/${var.environment}/cloudfront-domain"
}

resource "aws_iam_role" "lambda_execution_role" {
  name = "unity-static-site-manager-${var.stage}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = module.product-tags.tags
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda_execution_role.name
}

resource "aws_iam_role_policy" "s3_operations_policy" {
  name = "unity-static-site-s3-operations-${var.stage}"
  role = aws_iam_role.lambda_execution_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          data.aws_s3_bucket.static_site_bucket.arn,
          "${data.aws_s3_bucket.static_site_bucket.arn}/*"
        ]
      }
    ]
  })
}

module "static_site_manager_lambda" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "~> 7.0"

  function_name = "unity-static-site-manager-${var.stage}"
  description   = "Manages static site deployments and cleanup for Unity UDS"
  handler       = "lambda_function.lambda_handler"
  runtime       = "python3.12"
  timeout       = 300

  create_package         = false
  local_existing_package = "../lambda-build.zip"

  # Use the custom IAM role instead of creating a new one
  create_role = false
  lambda_role = aws_iam_role.lambda_execution_role.arn

  environment_variables = {
    S3_BUCKET_NAME          = var.s3_bucket_name
    CLOUDFRONT_DOMAIN       = data.aws_ssm_parameter.cloudfront_domain.value
    LOG_LEVEL               = "INFO"
    POWERTOOLS_SERVICE_NAME = "static-site-manager"
  }

  tags = module.product-tags.tags
}

# API Gateway for triggering Lambda from CI/CD
resource "aws_api_gateway_rest_api" "static_site_api" {
  name        = "unity-static-site-api-${var.stage}"
  description = "API for Unity static site management"

  tags = module.product-tags.tags
}

resource "aws_api_gateway_resource" "deploy_resource" {
  rest_api_id = aws_api_gateway_rest_api.static_site_api.id
  parent_id   = aws_api_gateway_rest_api.static_site_api.root_resource_id
  path_part   = "deploy"
}

resource "aws_api_gateway_resource" "cleanup_resource" {
  rest_api_id = aws_api_gateway_rest_api.static_site_api.id
  parent_id   = aws_api_gateway_rest_api.static_site_api.root_resource_id
  path_part   = "cleanup"
}

resource "aws_api_gateway_method" "deploy_method" {
  rest_api_id   = aws_api_gateway_rest_api.static_site_api.id
  resource_id   = aws_api_gateway_resource.deploy_resource.id
  http_method   = "POST"
  authorization = "NONE"
  api_key_required = true
}

resource "aws_api_gateway_method" "cleanup_method" {
  rest_api_id   = aws_api_gateway_rest_api.static_site_api.id
  resource_id   = aws_api_gateway_resource.cleanup_resource.id
  http_method   = "POST"
  authorization = "NONE"
  api_key_required = true
}

resource "aws_api_gateway_integration" "deploy_integration" {
  rest_api_id = aws_api_gateway_rest_api.static_site_api.id
  resource_id = aws_api_gateway_resource.deploy_resource.id
  http_method = aws_api_gateway_method.deploy_method.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = module.static_site_manager_lambda.lambda_function_invoke_arn
}

resource "aws_api_gateway_integration" "cleanup_integration" {
  rest_api_id = aws_api_gateway_rest_api.static_site_api.id
  resource_id = aws_api_gateway_resource.cleanup_resource.id
  http_method = aws_api_gateway_method.cleanup_method.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = module.static_site_manager_lambda.lambda_function_invoke_arn
}

resource "aws_api_gateway_deployment" "static_site_api_deployment" {
  depends_on = [
    aws_api_gateway_integration.deploy_integration,
    aws_api_gateway_integration.cleanup_integration
  ]

  rest_api_id = aws_api_gateway_rest_api.static_site_api.id

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.deploy_resource.id,
      aws_api_gateway_resource.cleanup_resource.id,
      aws_api_gateway_method.deploy_method.id,
      aws_api_gateway_method.cleanup_method.id,
      aws_api_gateway_integration.deploy_integration.id,
      aws_api_gateway_integration.cleanup_integration.id,
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "static_site_api_stage" {
  deployment_id = aws_api_gateway_deployment.static_site_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.static_site_api.id
  stage_name    = var.stage
}

# Lambda permission for API Gateway
resource "aws_lambda_permission" "api_gateway_invoke" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.static_site_manager_lambda.lambda_function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.static_site_api.execution_arn}/*/*"
}

# API Key for securing the API Gateway
resource "aws_api_gateway_api_key" "static_site_api_key" {
  name = var.api_key_name
  tags = module.product-tags.tags
}

# Usage plan to associate the API key with the API
resource "aws_api_gateway_usage_plan" "static_site_usage_plan" {
  name = "unity-static-site-usage-plan-${var.stage}"
  api_stages {
    api_id = aws_api_gateway_rest_api.static_site_api.id
    stage  = aws_api_gateway_stage.static_site_api_stage.stage_name
  }
}

# Associate the API key with the usage plan
resource "aws_api_gateway_usage_plan_key" "main" {
  key_id        = aws_api_gateway_api_key.static_site_api_key.id
  key_type      = "API_KEY"
  usage_plan_id = aws_api_gateway_usage_plan.static_site_usage_plan.id
}
