pipeline {
    agent {
        docker {
            image 'buildkite/puppeteer:v1.15.0'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME = '.'
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
