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
        HOME='.'
        GH_URL = 'https://api.github.com'
        // GH_PREFIX = 'asu'
        GH_TOKEN = credentials('github-org-asu-pac')
        // TODO After transition to new registry is complete, we can use the
        // same token as GH_TOKEN since registry will be GitHub Packages.
        // NPM_TOKEN = credentials('github-org-asu-pac')
        NPM_TOKEN = credentials('NPM_TOKEN')
        NODE_AUTH_TOKEN = credentials('github-org-asu-pac')
        // PERCY_TOKEN_COMPONENTS_CORE = credentials("PERCY_TOKEN_COMPONENTS_CORE")
        // PERCY_TOKEN_BOOTSTRAP = credentials("PERCY_TOKEN_BOOTSTRAP")
    }
    options {
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
    }
    stages {
         stage('Debug') {
            when {
                branch 'testing-whoami'
            }
            steps {
                container('node14') {
                  script {

                    // TODO Update after transition to new registry is complete
                    echo '## Configure .npmrc file for legacy registry...'
                    sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                    sh 'echo "always-auth=true" >> ~/.npmrc'
                    sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'

                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install --frozen-lockfile'
                    sh 'yarn build'

                    // TODO Remove after transition as it will be set in environment block:
                    // Use Github token as NPM token with GH Packages
                    NPM_TOKEN = GH_TOKEN
                    NODE_AUTH_TOKEN = GH_TOKEN

                    echo '## Configure .npmrc file for Github Package registry...'
                    sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                    sh 'echo "always-auth=true" >> ~/.npmrc'
                    sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" > ~/.npmrc'
                    sh 'cat /home/jenkins/agent/workspace/S_asu-unity-stack_testing-whoami/.npmrc'
                    sh 'git remote -v'
                    sh 'npm whoami --registry=https://npm.pkg.github.com/'
                    echo '## Publishing packages...'
                    sh 'yarn publish-packages'
                  }
                }
            }
        }
        stage('Build') {
            steps {
                container('node14') {
                    // TODO Update after transition to new registry is complete
                    echo '## Configure .npmrc file for legacy registry...'
                    sh 'echo "registry=https://registry.web.asu.edu/" > ~/.npmrc'
                    sh 'echo "always-auth=true" >> ~/.npmrc'
                    sh 'echo "//registry.web.asu.edu/:_authToken=$NPM_TOKEN" >> ~/.npmrc'

                    // echo '## Configure .npmrc file for Github Package registry...'
                    // Note: In the first command single > redirect (re)creates file
                    // sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                    // sh 'echo "always-auth=true" >> ~/.npmrc'
                    // sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ~/.npmrc'

                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install'
                    sh 'yarn build'
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
        stage('Publish') {
            when {
                branch 'NOdev'
            }
            steps {
                container('node14') {
                    script {
                        // TODO Remove after transition as it will be set in environment block:
                        // Use Github token as NPM token with GH Packages
                        NPM_TOKEN = GH_TOKEN

                        echo '# Publishing packages to GitHub Packages registry...'

                        echo '## Re-set .npmrc file for Github Package registry...'
                        // Note: In the first command, the single > redirect (re)creates file
                        sh 'echo "@asu:registry=https://npm.pkg.github.com" > ~/.npmrc'
                        sh 'echo "always-auth=true" >> ~/.npmrc'
                        sh 'echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ~/.npmrc'

                        echo '## Publishing packages...'
                        sh 'yarn publish-packages'
                    }
                }
            }
        }
        stage('Deploy') {
            when {
              branch 'NOdev'
            }
            steps {
                container('node14') {
                    script {
                        // TODO Remove after transition as it will be set in environment block:
                        // Use Github token as NPM token with GH Packages
                        NPM_TOKEN = GH_TOKEN

                        // echo "Debug persisted .npmrc..."
                        // sh 'cat ~/.npmrc'
                        // sh 'yarn config list'

                        echo '# Final, post-publish install and build...'
                        sh 'yarn install'
                        sh 'yarn build'

                        echo '# Prebuild Storybook static site as dry-run...'
                        sh 'yarn deploy-storybook --dry-run'
                        echo '# Compile templates and copy files for build deploy...'
                        sh 'yarn gulp'
                        echo '# Storybook static site final build and deploy...'
                        sh 'yarn deploy-storybook --existing-output-dir=build'
                    }
                }
            }
        }
    }
}
