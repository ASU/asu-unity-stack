pipeline {
    agent {
        docker {
            image 'node:11-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME = '.'
        CHROME_BIN='/usr/bin/chromium-browser'
        PUPPETEER_SKIP_CHROMIUM_DOWNLOAD='true'
    }
    stages {
        stage('Build') {
            steps {
                sh "yarn install"
                sh "yarn build"
            }
        }
        stage('Test') {
            steps {
                sh "yarn test"
            }
        }
        stage('e2e Test') {
            steps {
                sh "yarn start & yarn test:e2e"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
