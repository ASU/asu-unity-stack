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
  - name: aws-cli
    image: 'amazon/aws-cli:2.23.2'
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
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
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
        stage('Deploy to s3') {
          when {
              changeRequest target: 'dev'
          }
          steps {
            container('node20') {
              script {
                echo '## Build storybook'
                sh 'yarn build-storybook'
              }
            }
            container('aws-cli') {
              withEnv(["AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}", "AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}"]) {
                script {
                  echo '## Deploying to S3..'
                  sh "aws s3 sync ./build/ s3://${S3_BUCKET}/pr-${env.CHANGE_ID}/ --delete"
                  // comment on the github pr the link to the deployed storybook but only if there is not alreafy a comment
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
                                "body": "Storybook deployed at https://${S3_BUCKET}.s3.us-west-2.amazonaws.com/pr-${prNumber}/index.html"
                            }
                        """
                    )
                  }
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

                    container('aws-cli') {
                      withEnv(["AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}", "AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}"]) {
                        // For each PR, check if files exist and clean up
                        prList.each { prNumber ->
                            def prefix = "pr-${prNumber}"

                            // Check if directory exists
                            def hasFiles = sh(
                                script: "aws s3 ls s3://${S3_BUCKET}/${prefix}/",
                                returnStatus: true
                            ) == 0

                            if (!hasFiles) {
                                echo "No files found for PR ${prNumber}, skipping..."
                                return
                            }

                            // List files that would be deleted
                            def filesToDelete = sh(
                                script: "aws s3 ls s3://${S3_BUCKET}/${prefix}/ --recursive",
                                returnStdout: true
                            ).trim()

                            echo "Cleaning up S3 files for merged PR: ${prNumber}"
                            sh "aws s3 rm s3://${S3_BUCKET}/${prefix}/ --recursive"
                        }
                      }
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
    }
}
