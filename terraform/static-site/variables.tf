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

variable "product_key" {
  type        = string
  description = "Product key for ASU product-tags module."
}

variable "technical_contact" {
  type        = string
  description = "Technical contact ASURITE for product-tags module."
}

variable "administrative_contact" {
  type        = string
  description = "Administrative contact ASURITE for product-tags module."
}

variable "environment" {
  type        = string
  description = "Environment name (e.g., 'dev', 'staging') for product-tags module."
}

variable "repository_url" {
  type        = string
  description = "Repository URL for product-tags module."
  default     = "https://github.com/ASU/asu-unity-stack"
}

variable "components" {
  type        = list(string)
  description = "List of component names for product-tags module."
  default     = ["static-site"]
}
