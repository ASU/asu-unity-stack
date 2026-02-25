resource "aws_cloudfront_origin_access_control" "static_site" {
  name                              = "${var.bucket_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "static_site" {
  origin {
    domain_name              = aws_s3_bucket.static_site.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.static_site.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.static_site.id
  }

  enabled             = true
  default_root_object = "index.html"
  comment             = "CloudFront distribution for Unity UDS staging previews"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.static_site.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 300
    max_ttl                = 3600
  }

  # Use cheapest price class (North America + Europe)
  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = module.product-tags.tags
}

# Store CloudFront domain in SSM so Jenkins and Lambda can discover it
resource "aws_ssm_parameter" "cloudfront_domain" {
  name  = "/unity/${var.environment}/cloudfront-domain"
  type  = "String"
  value = aws_cloudfront_distribution.static_site.domain_name
  tags  = module.product-tags.tags
}
