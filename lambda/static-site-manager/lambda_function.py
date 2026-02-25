import json
import os
import zipfile
import tempfile
from typing import Dict, Any, List
import boto3
from botocore.exceptions import ClientError
from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.utilities.typing import LambdaContext

# Initialize powertools
logger = Logger()
tracer = Tracer()

# Initialize AWS clients
s3_client = boto3.client('s3')

# Environment variables
S3_BUCKET_NAME = os.environ['S3_BUCKET_NAME']
AWS_REGION = os.environ.get('AWS_REGION', 'us-west-2')

@tracer.capture_lambda_handler
@logger.inject_lambda_context
def lambda_handler(event: Dict[str, Any], context: LambdaContext) -> Dict[str, Any]:
    """
    Lambda handler for static site management operations.

    Supports two operations:
    - deploy: Upload static files to S3 for a PR
    - cleanup: Delete static files for merged PRs
    """
    try:
        # Parse the request
        http_method = event.get('httpMethod', '')
        path = event.get('path', '')
        body = json.loads(event.get('body', '{}')) if event.get('body') else {}

        logger.info(f"Processing {http_method} request to {path}")

        if path.endswith('/deploy'):
            return handle_deploy(body)
        elif path.endswith('/cleanup'):
            return handle_cleanup(body)
        else:
            return create_response(400, {'error': 'Invalid endpoint'})

    except Exception as e:
        logger.exception("Error processing request")
        return create_response(500, {'error': str(e)})

@tracer.capture_method
def handle_deploy(body: Dict[str, Any]) -> Dict[str, Any]:
    """
    Handle deployment of static files to S3.

    Expected body:
    {
        "pr_number": "123",
        "build_artifacts": "base64_encoded_zip_content"
    }
    """
    try:
        pr_number = body.get('pr_number')
        build_artifacts = body.get('build_artifacts')

        if not pr_number or not build_artifacts:
            return create_response(400, {'error': 'pr_number and build_artifacts are required'})

        # Create S3 prefix for this PR
        s3_prefix = f"pr-{pr_number}/"

        # Process and upload the build artifacts
        upload_count = process_and_upload_artifacts(build_artifacts, s3_prefix)

        storybook_url = f"https://{S3_BUCKET_NAME}.s3.{AWS_REGION}.amazonaws.com/{s3_prefix}index.html"

        logger.info(f"Successfully deployed PR {pr_number} with {upload_count} files")

        return create_response(200, {
            'message': f'Successfully deployed PR {pr_number}',
            'files_uploaded': upload_count,
            'storybook_url': storybook_url
        })

    except Exception as e:
        logger.exception(f"Error deploying PR {body.get('pr_number')}")
        return create_response(500, {'error': str(e)})

@tracer.capture_method
def handle_cleanup(body: Dict[str, Any]) -> Dict[str, Any]:
    """
    Handle cleanup of static files for merged PRs.

    Expected body:
    {
        "pr_numbers": ["123", "124", "125"]
    }
    """
    try:
        pr_numbers = body.get('pr_numbers', [])

        if not pr_numbers:
            return create_response(400, {'error': 'pr_numbers array is required'})

        cleanup_results = []

        for pr_number in pr_numbers:
            s3_prefix = f"pr-{pr_number}/"
            deleted_count = cleanup_pr_files(s3_prefix)

            cleanup_results.append({
                'pr_number': pr_number,
                'files_deleted': deleted_count
            })

            logger.info(f"Cleaned up PR {pr_number}: {deleted_count} files deleted")

        total_deleted = sum(result['files_deleted'] for result in cleanup_results)

        return create_response(200, {
            'message': f'Successfully cleaned up {len(pr_numbers)} PRs',
            'total_files_deleted': total_deleted,
            'cleanup_results': cleanup_results
        })

    except Exception as e:
        logger.exception("Error during cleanup")
        return create_response(500, {'error': str(e)})

@tracer.capture_method
def process_and_upload_artifacts(build_artifacts: str, s3_prefix: str) -> int:
    """
    Process base64 encoded zip file and upload contents to S3.

    Args:
        build_artifacts: Base64 encoded zip file content
        s3_prefix: S3 prefix to upload files to

    Returns:
        Number of files uploaded
    """
    import base64

    # Decode the base64 content
    zip_content = base64.b64decode(build_artifacts)

    upload_count = 0

    with tempfile.NamedTemporaryFile() as temp_zip:
        temp_zip.write(zip_content)
        temp_zip.flush()

        with zipfile.ZipFile(temp_zip.name, 'r') as zip_ref:
            for file_info in zip_ref.filelist:
                if file_info.is_dir():
                    continue

                file_content = zip_ref.read(file_info.filename)
                s3_key = s3_prefix + file_info.filename

                # Determine content type based on file extension
                content_type = get_content_type(file_info.filename)

                # Upload to S3
                s3_client.put_object(
                    Bucket=S3_BUCKET_NAME,
                    Key=s3_key,
                    Body=file_content,
                    ContentType=content_type
                )

                upload_count += 1

    return upload_count

@tracer.capture_method
def cleanup_pr_files(s3_prefix: str) -> int:
    """
    Delete all files with the given S3 prefix.

    Args:
        s3_prefix: S3 prefix to delete files from

    Returns:
        Number of files deleted
    """
    deleted_count = 0

    try:
        # List objects with the prefix
        paginator = s3_client.get_paginator('list_objects_v2')
        pages = paginator.paginate(Bucket=S3_BUCKET_NAME, Prefix=s3_prefix)

        objects_to_delete = []

        for page in pages:
            if 'Contents' in page:
                for obj in page['Contents']:
                    objects_to_delete.append({'Key': obj['Key']})

        # Delete objects in batches (S3 allows up to 1000 objects per delete request)
        if objects_to_delete:
            for i in range(0, len(objects_to_delete), 1000):
                batch = objects_to_delete[i:i+1000]

                response = s3_client.delete_objects(
                    Bucket=S3_BUCKET_NAME,
                    Delete={'Objects': batch}
                )

                deleted_count += len(response.get('Deleted', []))

                # Log any errors
                if 'Errors' in response:
                    for error in response['Errors']:
                        logger.error(f"Failed to delete {error['Key']}: {error['Message']}")

    except ClientError as e:
        logger.error(f"Error cleaning up files with prefix {s3_prefix}: {e}")
        # Don't raise the exception, just log it and return what we managed to delete

    return deleted_count

def get_content_type(filename: str) -> str:
    """
    Determine content type based on file extension.

    Args:
        filename: Name of the file

    Returns:
        MIME type string
    """
    extension = filename.lower().split('.')[-1] if '.' in filename else ''

    content_types = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'application/javascript',
        'json': 'application/json',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'ico': 'image/x-icon',
        'woff': 'font/woff',
        'woff2': 'font/woff2',
        'ttf': 'font/ttf',
        'eot': 'application/vnd.ms-fontobject'
    }

    return content_types.get(extension, 'application/octet-stream')

def create_response(status_code: int, body: Dict[str, Any]) -> Dict[str, Any]:
    """
    Create a standardized API Gateway response.

    Args:
        status_code: HTTP status code
        body: Response body

    Returns:
        API Gateway response format
    """
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        'body': json.dumps(body)
    }
