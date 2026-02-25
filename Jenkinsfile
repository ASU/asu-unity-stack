pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins
  securityContext:
    runAsUser: 1000 # default UID of jenkins user to node user in agent image
  containers:
  - name: node20
    image: 'node:20.15'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: playwright
    image: 'mcr.microsoft.com/playwright:v1.50.1-jammy'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: python
    image: 'python:3.12-slim'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: aws-cli
    image: 'amazon/aws-cli:2.23.2'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: terragrunt
    image: asuuto/dco-terragrunt:latest
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
        HOME='.'
        RAW_GH_TOKEN = credentials('github-org-asu-pac')
        NPM_TOKEN = credentials('NPM_TOKEN')
        NODE_AUTH_TOKEN = credentials('github-org-asu-pac')
        S3_BUCKET = 'unity-uds-staging'
        DAYS_TO_SCAN = 14
    }
    options {
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
    }
    stages {
        stage('Developer release') {
            when {
                branch 'testing'
            }
            steps {
                container('node20') {
                  script {
                    writeFile file: '.npmrc', text: '@asu:registry=https://npm.pkg.github.com/ \n' +
                      '//npm.pkg.github.com/:_authToken=' + env.RAW_GH_TOKEN_PSW
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install --immutable'
                    sh 'yarn build'

                    withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                      echo '## Publishing packages...'
                      sh 'yarn publish-packages'
                    }
                  }
                }
            }
        }
        stage('Build') {
            steps {
                container('node20') {
                  withEnv(["GITHUB_AUTH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install'
                    sh 'yarn build'
                  }
                }
            }
        }
        stage('Deploy PR to S3') {
            when {
                expression { env.CHANGE_TARGET == 'dev' }
            }
            steps {
                container('node20') {
                    script {
                        echo '## Building Storybook for PR preview...'
                        sh 'yarn build-storybook'
                    }
                }
                container('aws-cli') {
                    script {
                        echo "## Deploying Storybook to S3 for PR-${env.CHANGE_ID}..."
                        sh "aws s3 sync ./build/ s3://${S3_BUCKET}/pr-${env.CHANGE_ID}/ --delete"
                        // Get CloudFront domain from SSM Parameter Store
                        def cfDomain = sh(
                            script: "aws ssm get-parameter --name /unity/staging/cloudfront-domain --query Parameter.Value --output text",
                            returnStdout: true
                        ).trim()
                        def storybookUrl = "https://${cfDomain}/pr-${env.CHANGE_ID}/index.html"
                        echo "## Storybook preview available at: ${storybookUrl}"
                        // Post a comment on the GitHub PR with the staging URL (only if not already posted)
                        def prNumber = env.CHANGE_ID
                        def prComments = httpRequest(
                            url: "https://api.github.com/repos/ASU/asu-unity-stack/issues/${prNumber}/comments",
                            httpMode: 'GET',
                            contentType: 'APPLICATION_JSON',
                            customHeaders: [
                                [name: 'Authorization', value: "Bearer " + env.RAW_GH_TOKEN_PSW],
                                [name: 'Accept', value: 'application/vnd.github.v3+json']
                            ]
                        ).content
                        def prCommentsJson = readJSON text: prComments
                        def commentExists = false

                        for (comment in prCommentsJson) {
                            if (comment.body.contains("Storybook deployed")) {
                                commentExists = true
                                break
                            }
                        }
                        if (!commentExists) {
                            httpRequest(
                                url: "https://api.github.com/repos/ASU/asu-unity-stack/issues/${prNumber}/comments",
                                httpMode: 'POST',
                                contentType: 'APPLICATION_JSON',
                                customHeaders: [
                                    [name: 'Authorization', value: "Bearer " + env.RAW_GH_TOKEN_PSW],
                                    [name: 'Accept', value: 'application/vnd.github.v3+json']
                                ],
                                requestBody: """
                                    {
                                        "body": "Storybook deployed at ${storybookUrl}"
                                    }
                                """
                            )
                        }
                    }
                }
            }
        }
        stage('Lambda Archive') {
            when {
                branch 'dev'
            }
            steps {
                container('python') {
                    dir('lambda/static-site-manager') {
                        echo "## Installing python dependencies for Lambda..."
                        sh "pip install -r requirements.in -t ."
                        echo "## Creating Lambda archive..."
                        sh "zip -r9 ../../lambda-build.zip ."
                    }
                }
            }
        }
        stage('Terraform Deploy Staging') {
            when {
                branch 'dev'
            }
            steps {
                container('terragrunt') {
                    dir('terraform') {
                        echo "## Initializing Terraform..."
                        sh "terraform init"
                        echo "## Planning Terraform deployment..."
                        sh "terraform plan -var-file=staging.tfvars -out=tfplan"
                        echo "## Applying Terraform deployment..."
                        sh "terraform apply -auto-approve tfplan"
                    }
                }
            }
        }
        stage('Test') {
            steps {
                container('playwright') {
                    echo '## Running jests tests...'
                    sh 'yarn test'
                }
            }
        }
        stage('Security Check') {
          when {
            expression { env.CHANGE_TARGET == 'dev' }
          }
          steps {
              container('node20') {
                withEnv(["GITHUB_AUTH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                  echo '## Running security checks...'
                  sh 'yarn install --immutable'
                  sh 'yarn npm audit --all --severity critical'
                  script {
                  def result = sh(
                      script: 'yarn npm audit --all --severity high',
                      returnStatus: true
                  )
                  if (result != 0) {
                    slackSend(
                        channel: '#prd-uds',
                        color: 'warning',
                        message: "@uds-developers Action might be needed: ${env.RUN_DISPLAY_URL}"
                    )
                  }
                  }
                }
            }
          }
        }
        stage('Publish') {
            when {
                branch 'dev'
            }
            steps {
                container('node20') {
                    script {
                      writeFile file: '.npmrc', text: '@asu:registry=https://npm.pkg.github.com/ \n' +
                      '//npm.pkg.github.com/:_authToken=' + env.RAW_GH_TOKEN_PSW
                      withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                      echo '## Publishing packages...'
                      sh 'yarn publish-packages'
                      }
                    }
                }
            }
        }
        stage('Deploy') {
            when {
              branch 'dev'
            }
            steps {
                container('node20') {
                    script {
                        echo '# Final, post-publish install and build to include just published pkgs...'
                        sh 'yarn install --immutable'
                        sh 'yarn build-storybook'

                        withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                          // Must pass branch name "dev" and "PUSH" for script to deploy
                          // If branch!=="dev" build will be nested inside a folder
                          sh "node ./scripts/deploy-gh-pages.js dev PUSH"

                        }
                    }
                }
            }
        }
        stage('Cleanup S3 PR Environments') {
            when {
                branch 'dev'
            }
            steps {
                script {
                    // Get recently merged PR numbers from merge commits
                    def mergedPRs = sh(
                        script: """
                            git fetch --all
                            git log --merges --since="\${DAYS_TO_SCAN} days ago" --grep="Merge pull request #" \
                            | grep -o '#[0-9]\\+' \
                            | sed 's/#//' \
                            | sort -u
                        """,
                        returnStdout: true
                    ).trim()

                    if (!mergedPRs) {
                        echo "No merged PRs found in the last ${DAYS_TO_SCAN} days. Nothing to clean up."
                        return
                    }

                    def prList = mergedPRs.split('\n').collect { it.trim() }
                    echo "Recently merged PRs: ${prList}"

                    // Build the JSON array of PR numbers for the Lambda payload
                    def prNumbersJson = prList.collect { "\"${it}\"" }.join(',')

                    container('aws-cli') {
                        echo "## Invoking Lambda to clean up ${prList.size()} merged PR environments..."
                        sh """
                            aws lambda invoke \
                                --function-name unity-static-site-manager-staging \
                                --cli-binary-format raw-in-base64-out \
                                --payload '{"httpMethod":"POST","path":"/cleanup","body":"{\\"pr_numbers\\":[${prNumbersJson}]}"}' \
                                /tmp/lambda-cleanup-response.json
                        """
                        def response = readFile('/tmp/lambda-cleanup-response.json')
                        echo "Lambda cleanup response: ${response}"
                    }
                }
            }
        }
        stage('Accessibility testing') {
            when {
                branch 'dev'
            }
            steps {
                container('playwright') {
                  script {
                    def accessibilityTestResults = sh(
                        script: 'yarn test:accessibility',
                        returnStatus: true
                    )
                    if (accessibilityTestResults != 0) {
                        slackSend(
                            channel: '#prdfam-uds-ci',
                            color: 'warning',
                            message: "@uds-developers Accessibility tests failed.: ${env.RUN_DISPLAY_URL} \n Pull Branch and run tests locally to see report"
                        )
                    }
                  }
                }
            }
        }
    }
}
