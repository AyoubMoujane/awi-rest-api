pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }

    environment {
        HOME= '.'
        CI = 'true'
        registry = "ayoubmoujane/awi-rest-api"
    }
    stages {
        stage('Example') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm -v'  
                    sh 'node -v'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm config ls'
                    sh 'npm test'
                }
                
            }
        }
    }
}

node {
    def app

    stage('Build image') {
        app = docker.build("ayoubmoujane/awi-rest-api")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', '58227683-43e8-4761-a94a-60d331621bf2') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}