variable "role_name" {
  description = "The name of the IAM role to create and manage."
  type        = string
  default     = "unity-static-site-role"
}
variable "bucket_name" {
  description = "The name of the S3 bucket for static site hosting."
  type        = string
}

variable "region" {
  description = "AWS region to deploy resources."
  type        = string
  default     = "us-west-2"
}

variable "role_arn" {
  description = "The ARN of the IAM role to assume for AWS provider."
  type        = string
}
