output "bucket_name" {
  value = aws_s3_bucket.static_site.bucket
}

output "cloudfront_domain_name" {
  description = "The CloudFront distribution domain name for accessing the staging site."
  value       = aws_cloudfront_distribution.static_site.domain_name
}

output "cloudfront_distribution_id" {
  description = "The CloudFront distribution ID."
  value       = aws_cloudfront_distribution.static_site.id
}

output "ssm_cloudfront_domain_param" {
  description = "SSM parameter path storing the CloudFront domain."
  value       = aws_ssm_parameter.cloudfront_domain.name
}
