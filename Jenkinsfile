pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }

    tools {nodejs "NodejsLTS"}

    environment {
        HOME= '.'
        CI = 'true'
        registry = "ayoubmoujane/awi-rest-api"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
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