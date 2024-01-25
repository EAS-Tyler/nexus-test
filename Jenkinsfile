pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('eastyler-dockerhub')
    }
    stages {
        // stage('Test') {
        //     steps {
        //         echo 'Testing...'
        //         sh '''cd ./backend
        //               npm install
        //               npm test'''
        //     }
        // }
        stage('Build') {
            steps {
                echo 'Building docker image'
                sh 'docker build -t eastyler/jenkins-learn2:web .'
            }
        }
        stage('Login') {
            steps {
                echo 'Logging in...'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        // pull image
        stage('Push') {
            steps {
                echo 'Pushing...'
                // push new image after code change
                sh 'docker push eastyler/jenkins-learn2:web'
            }
        }
        //    stage('Pull') {
        //     steps {
        //         echo 'Pulling docker image...'
        //         sh 'docker pull eastyler/jenkins_learn2:web'
        //     }
        // }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh '''ssh root@172.16.5.7
                      docker pull eastyler/jenkins_learn2:web
                      docker run eastyler/jenkins-learn2:web
                      '''
            // sh 'docker compose up' ???  get compose to pull image here
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
