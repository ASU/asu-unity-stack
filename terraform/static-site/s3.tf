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

resource "aws_s3_bucket" "static_site" {
  bucket        = var.bucket_name
  force_destroy = true
  tags          = module.product-tags.tags
}

resource "aws_s3_bucket_versioning" "static_site" {
  bucket = aws_s3_bucket.static_site.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Block all public access — content is served through CloudFront only
resource "aws_s3_bucket_public_access_block" "static_site" {
  bucket = aws_s3_bucket.static_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Allow only CloudFront OAC to read objects from this bucket
resource "aws_s3_bucket_policy" "static_site_policy" {
  bucket     = aws_s3_bucket.static_site.id
  policy     = data.aws_iam_policy_document.s3_policy.json
  depends_on = [aws_s3_bucket_public_access_block.static_site]
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.static_site.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.static_site.arn]
    }
  }
}
