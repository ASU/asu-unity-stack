pipeline {
    agent {
        docker {
            image 'buildkite/puppeteer:v1.15.0'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME = '.'
        SERVICE_NAME='UnityELBService'
        IMAGE_VERSION='v_${BUILD_NUMBER}'
        TASK_FAMILY='UnityQATask'
        REPOSITORY_URI='239125824238.dkr.ecr.us-west-2.amazonaws.com/asunity'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('e2e Test') {
            steps {
                sh 'yarn start & yarn test:e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Logging in to Amazon ECR...'
                sh 'aws --version'
                sh '$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)'
                echo 'Building the Docker image...'
                sh 'docker build -t $REPOSITORY_URI:latest .'
                sh 'docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:$IMAGE_VERSION'
                echo 'Pushing the Docker images...'
                sh 'docker push $REPOSITORY_URI:latest'
                sh 'docker push $REPOSITORY_URI:$IMAGE_VERSION'
                echo 'Deploying container to ECS..'
            }
        }
    }
}
