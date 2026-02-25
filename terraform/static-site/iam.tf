# NOTE: The Terraform provider uses assume_role (in terraform.tf) for all
# AWS operations, including S3 bucket creation. No additional IAM role
# is needed within this configuration.
#
# The Lambda execution role for S3 operations is defined in the root
# terraform/main.tf configuration, not here.
