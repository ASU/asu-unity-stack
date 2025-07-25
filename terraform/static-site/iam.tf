resource "aws_iam_role" "static_site" {
  name = var.role_name

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}


resource "aws_iam_role_policy" "static_site_s3_limited" {
  name = "static-site-s3-limited"
  role = aws_iam_role.static_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:CreateBucket",
          "s3:DeleteBucket"
        ]
        Resource = "*"
      }
    ]
  })
}

output "static_site_role_arn" {
  value = aws_iam_role.static_site.arn
}
