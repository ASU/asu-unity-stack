output "s3_bucket_name" {
  description = "The name of the S3 bucket for static sites."
  value       = data.aws_s3_bucket.static_site_bucket.id
}

output "lambda_function_arn" {
  description = "The ARN of the static site manager Lambda function."
  value       = module.static_site_manager_lambda.lambda_function_arn
}

output "api_gateway_url" {
  description = "The URL of the API Gateway for static site management."
  value       = "https://${aws_api_gateway_rest_api.static_site_api.id}.execute-api.${var.aws_region}.amazonaws.com/${var.stage}"
}

output "deploy_endpoint" {
  description = "The endpoint for deploying static sites."
  value       = "https://${aws_api_gateway_rest_api.static_site_api.id}.execute-api.${var.aws_region}.amazonaws.com/${var.stage}/deploy"
}

output "cleanup_endpoint" {
  description = "The endpoint for cleaning up static sites."
  value       = "https://${aws_api_gateway_rest_api.static_site_api.id}.execute-api.${var.aws_region}.amazonaws.com/${var.stage}/cleanup"
}

output "api_key_id" {
  description = "The ID of the API Gateway API key."
  value       = aws_api_gateway_api_key.static_site_api_key.id
}

output "api_key_value" {
  description = "The value of the API Gateway API key."
  value       = aws_api_gateway_api_key.static_site_api_key.value
  sensitive   = true
}
