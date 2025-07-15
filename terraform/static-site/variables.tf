variable "bucket_name" {
  description = "The name of the S3 bucket for static site hosting."
  type        = string
}

variable "region" {
  description = "AWS region to deploy resources."
  type        = string
  default     = "us-west-2"
}
