pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'us-west-2'
        HOME='.'
        CLUSTER_NAME='UnityQACluster'
        SERVICE_NAME='UnityELBService'
        TASK_FAMILY='UnityQATask'
        REPOSITORY_URI='239125824238.dkr.ecr.us-west-2.amazonaws.com/asunity'
        GH_TOKEN = credentials('GH_TOKEN')
        NPM_TOKEN = credentials('NPM_TOKEN')
        PERCY_TOKEN_COMPONENTS_CORE = credentials("PERCY_TOKEN_COMPONENTS_CORE")
        PERCY_TOKEN_BOOTSTRAP = credentials("PERCY_TOKEN_BOOTSTRAP")
    }
    options {
      withAWS(credentials:'aws-jenkins')
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:12.22.1'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                sh 'echo "always-auth=true" >> ~/.npmrc'
                sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'
                //sh 'yarn add @storybook/storybook-deployer --ignore-workspace-root-check --registry https://registry.npmjs.org'
                sh 'yarn install'
                sh 'yarn build'
                sh 'yarn build-storybook'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'buildkite/puppeteer:5.2.1'
                    args '-p 3000:3000'
                }
            }
            steps {
                //sh 'yarn test' TODO update or enable when tests are specified. Was resulting in "Error: no test specified" for multiple packages
                //sh 'yarn start & yarn test:e2e' TODO: enable testing server when e2e tests fixed
                sh 'echo "run visual regression testing"'
                sh 'PERCY_TOKEN_BOOTSTRAP=$PERCY_TOKEN_BOOTSTRAP PERCY_TOKEN_COMPONENTS_CORE=$PERCY_TOKEN_COMPONENTS_CORE yarn percy'
            }
        }
        stage('Publish Packages to Registry') {
            agent {
                docker {
                    image 'node:12'
                    args '-p 3000:3000'
                }
            }
            steps {
                echo 'Publishing packages to private NPM registry...'
                sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                sh 'echo "always-auth=true" >> ~/.npmrc'
                sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'
                sh 'yarn publish-packages'
            }
        }
        stage('Deploy QA Environment') {
            when {
                branch 'dev'
            }
            steps {
                echo 'Logging in to Amazon ECR...'
                sh 'aws --version'
                sh '$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)'
                echo 'Building the Docker image...'
                sh 'docker build --build-arg NPM_TOKEN="$NPM_TOKEN" -t $REPOSITORY_URI:latest .'
                sh 'docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:v_$BUILD_NUMBER'
                echo 'Pushing the Docker images...'
                sh 'docker push $REPOSITORY_URI:latest'
                sh 'docker push $REPOSITORY_URI:v_$BUILD_NUMBER'
                echo 'Deploying container to ECS..'
                sh 'aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-new-deployment'
            }
        }
    }
}
