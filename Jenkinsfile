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
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying...'
        //         sh '''ssh root@172.16.5.7
        //               docker pull eastyler/jenkins_learn2:web
        //               docker run eastyler/jenkins-learn2:web
        //               '''
        //     // sh 'docker compose up' ???  get compose to pull image here
        //     }
        // }
        stage('Deploy') {
            steps {
                sshagent(credentials : ['ssh_agent']) {
                    // sh 'ssh -o StrictHostKeyChecking=no root@172.16.5.7 uptime'
                    sh 'ssh root@172.16.5.7'
                    sh 'touch helloooo'
                // sh 'ssh -v user@hostname.com'
                // sh 'scp ./source/filename user@hostname.com:/remotehost/target'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
