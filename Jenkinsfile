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
  - name: node18
    image: 'node:18.16'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: puppeteer
    image: 'ghcr.io/puppeteer/puppeteer:22'
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
        PERCY_TOKEN = credentials('PERCY_TOKEN')
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
                container('node18') {
                  script {
                    echo '## Configure .npmrc file for @asu registry...'
                    writeFile file: '.npmrc', text: '@asu:registry=https://npm.pkg.github.com/ \n' +
                      '//npm.pkg.github.com/:_authToken=' + env.RAW_GH_TOKEN_PSW
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install --frozen-lockfile'
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
                container('node18') {
                    echo '## Configure .npmrc file for Github Package registry...'
                    writeFile file: '.npmrc', text: '@asu:registry=https://npm.pkg.github.com/ \n' +
                      '//npm.pkg.github.com/:_authToken=' + env.RAW_GH_TOKEN_PSW
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install --frozen-lockfile'
                    sh 'yarn build'
                }
            }
        }
        stage('Test') {
            steps {
                container('node18') {
                    echo '## Running jests tests...'
                    sh 'yarn test'
                }
            }
        }
        stage('Visual Regression Testing') {
          when {
            allOf {
              expression { env.CHANGE_TARGET == 'dev' }
              expression { // Only run if there are changes in packages directory
                sh(returnStatus: true, script: 'git diff origin/dev... --name-only | grep --quiet "^packages/.*"') == 0
              }
            }
          }
          steps {
              container('node18') {
                echo 'building storybook...'
                sh 'yarn build-storybook'
              }
              container('puppeteer') {
                  echo 'running percy tests...'
                  sh 'yarn percy-test'
              }
          }
        }
        stage('Publish') {
            when {
                branch 'dev'
            }
            steps {
                container('node18') {
                    script {
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
                container('node18') {
                    script {
                        echo '# Final, post-publish install and build to include just published pkgs...'
                        sh 'yarn install --frozen-lockfile'
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
