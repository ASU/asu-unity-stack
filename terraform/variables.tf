variable "aws_region" {
  type        = string
  description = "AWS region for deployment."
  default     = "us-west-2"
}

variable "stage" {
  type        = string
  description = "Deployment stage."
}

variable "s3_bucket_name" {
  type        = string
  description = "The name of the S3 bucket to host the static sites."
}

variable "github_repo" {
  type        = string
  description = "GitHub repository (e.g., 'ASU/asu-unity-stack')."
  default     = "ASU/asu-unity-stack"
}

variable "api_key_name" {
  type        = string
  description = "The name of the API Gateway API key."
  default     = "unity-static-site-api-key"
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
