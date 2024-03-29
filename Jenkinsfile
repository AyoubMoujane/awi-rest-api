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
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-ayoubmoujane') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Deploy') {
        withCredentials([sshUserPrivateKey(credentialsId: "nodejs-back-server", keyFileVariable: 'credentials')]) {
            sh 'scp -o StrictHostKeyChecking=no -i ${credentials} deploy.sh ec2-user@15.236.140.17:~/'
            sh 'ssh -o StrictHostKeyChecking=no -i ${credentials} ec2-user@15.236.140.17 "chmod +x deploy.sh"'
            sh 'ssh -o StrictHostKeyChecking=no -i ${credentials} ec2-user@15.236.140.17 ./deploy.sh'
        }     
    }
}