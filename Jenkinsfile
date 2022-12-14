pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins
  containers:
  - name: node14
    image: 'node:14.17.6'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: puppeteer
    image: 'buildkite/puppeteer:5.2.1'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  imagePullSecrets:
  - name: docker-hub-credentials
"""
        }
    }
    environment {
        // AWS_DEFAULT_REGION = 'us-west-2'
        // HOME='.'
        // CLUSTER_NAME='UnityQACluster'
        // SERVICE_NAME='UnityELBService'
        // TASK_FAMILY='UnityQATask'
        // REPOSITORY_URI='239125824238.dkr.ecr.us-west-2.amazonaws.com/asunity'
        NPM_TOKEN = credentials('NPM_TOKEN')
        // PERCY_TOKEN_COMPONENTS_CORE = credentials("PERCY_TOKEN_COMPONENTS_CORE")
        // PERCY_TOKEN_BOOTSTRAP = credentials("PERCY_TOKEN_BOOTSTRAP")
        GH_URL = 'https://github.com/ASU/asu-unity-stack.git'
        GH_TOKEN = credentials('github-org-asu-pac')
    }
    options {
      // withAWS(credentials:'aws-jenkins')
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
    }
    stages {
        stage('Build Test') {
            steps {
                container('node14') {
                    
                    //echo '## Configuring .npmrc file...'
                    //sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                    //sh 'echo "always-auth=true" >> ~/.npmrc'
                    //sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ~/.npmrc'
                    
                    sh 'yarn config list'
                    sh 'yarn add @storybook/storybook-deployer --ignore-workspace-root-check --registry https://registry.npmjs.org'
                    sh 'yarn install'
                    sh 'yarn build'
                    sh 'yarn deploy-storybook --dry-run'
                    sh 'yarn gulp'
                    sh 'yarn deploy-storybook --existing-output-dir=build'
                }
            }
        }
        stage('Build') {
            steps {
                container('node14') {
                    sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                    sh 'echo "always-auth=true" >> ~/.npmrc'
                    sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'
                    // sh 'yarn add @storybook/storybook-deployer --ignore-workspace-root-check --registry https://registry.npmjs.org'
                    sh 'yarn install'
                    sh 'yarn build'
                    // sh 'yarn build-storybook'
                }
            }
        }
        stage('Test') {
            steps {
                container('puppeteer') {
                    script {
                        //sh 'yarn test' TODO update or enable when tests are specified. Was resulting in "Error: no test specified" for multiple packages
                        //sh 'yarn start & yarn test:e2e' TODO: enable testing server when e2e tests fixed
                        sh 'echo "SKIP visual regression testing"'
                        //sh 'echo "run visual regression testing"'
                        //sh 'PERCY_TOKEN_BOOTSTRAP=$PERCY_TOKEN_BOOTSTRAP PERCY_TOKEN_COMPONENTS_CORE=$PERCY_TOKEN_COMPONENTS_CORE yarn percy'
                    }
                }
            }
        }
        stage('Publish Packages to Registry') {
            // when {
            //     branch 'dev'
            // }
            steps {
                container('node14') {
                    script {
                        // Use Github token as NPM token with GH Packages
                        NPM_TOKEN = GH_TOKEN
                      
                        // echo 'Publishing packages to private NPM registry...'
                        // sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                        // sh 'echo "always-auth=true" >> ~/.npmrc'
                        // sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'
                        echo '# Publishing packages to GitHub Packages...'

                        echo '## Configuring .npmrc file...'
                        sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                        sh 'echo "always-auth=true" >> ~/.npmrc'
                        sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ~/.npmrc'
                      
                        echo "${GH_URL}"

                        echo '## Publishing packages...'
                        sh 'yarn publish-packages'

                    }
                }
            }
        }
        stage('Deploy Storybook to GitHub Pages') {
            // when {
            //     branch 'dev'
            // }
            steps {
                container('node14') {
                    script {
                        // Use Github token as NPM token with GH Packages
                        NPM_TOKEN = GH_TOKEN

                        sh 'su node; yarn add @storybook/storybook-deployer --ignore-workspace-root-check --registry https://registry.npmjs.org'
                        sh 'su node; yarn install'
                        sh 'su node; yarn build'

                        echo 'Prebuild storybook build deploy...'
                        sh 'whoami'
                        sh 'git config --get remote.origin.url'
                          
                        echo '## Configuring .npmrc file...'
                        sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                        sh 'echo "always-auth=true" >> ~/.npmrc'
                        sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ~/.npmrc'
                        
                        sh 'ls -la /home/jenkins/agent/workspace/UDS_asu-unity-stack_PR-902/node_modules/@storybook/core-server/public/'
                        sh 'ls -la /home/jenkins/agent/workspace'
                        // sh 'chown -R node:node /home/jenkins/agent/workspace'
                        // sh 'ls -la /home/jenkins/agent/workspace/UDS_asu-unity-stack_PR-902/node_modules/@storybook/core-server/public/'
                          
                        sh 'su node; yarn deploy-storybook --dry-run'
                        sh 'su node; yarn gulp'
                        sh 'su node; yarn deploy-storybook --existing-output-dir=build'

                    }
                }
            }
        }
        stage('Deploy QA Environment') {
            when {
                branch 'dev'
            }
            steps {
              sh 'echo "Remove this old task..."'
                // echo 'Logging in to Amazon ECR...'
                // sh 'aws --version'
                // sh '$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)'
                // echo 'Building the Docker image...'
                // sh 'docker build --build-arg NPM_TOKEN="$NPM_TOKEN" -t $REPOSITORY_URI:latest .'
                // sh 'docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:v_$BUILD_NUMBER'
                // echo 'Pushing the Docker images...'
                // sh 'docker push $REPOSITORY_URI:latest'
                // sh 'docker push $REPOSITORY_URI:v_$BUILD_NUMBER'
                // echo 'Deploying container to ECS..'
                // sh 'aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-new-deployment'
            }
        }
    }
}
