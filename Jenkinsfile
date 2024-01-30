pipeline {
    agent any
    environment {
        // DOCKERHUB_CREDENTIALS = credentials('eastyler-dockerhub')
        // NEXUS_VERSION = 'nexus3'
        // NEXUS_PROTOCOL = 'http'
        // NEXUS_URL = 'http://172.16.5.13:8081/'
        // NEXUS_REPOSITORUY = 'docker-nexus-hosted'
        // NEXUS_CREDENTIAL_ID = 'nexus-user-credentials'
        NEXUS_CREDS = credentials('nexus-user-credentials')
        NEXUS_DOCKER_REPO = '172.16.5.13:8083'
    }
    stages {
    //     stage('Test') {
    //         steps {
    //             echo 'Testing...'
    //             sh '''cd ./backend
    //                   npm install
    //                   npm test'''
    //         }
    //     }
        // stage('Scan') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'SonarScanner'
        //             //selecting sonarqube server i want to interact with
        //             withSonarQubeEnv(installationName: 'server-sonar') {
        //                 sh "${scannerHome}/bin/sonar-scanner"
        //             }
        //         }
        //     }
        // }
        // stage('Quality Gate') {
        //     steps {
        //                 waitForQualityGate abortPipeline: true
        //     }
        // }

        // repo url http://172.16.5.13:8081/repository/docker-nexus-hosted/
        stage('Build') {
            steps {
                echo 'Building docker image'
                sh 'docker build -t $NEXUS_DOCKER_REPO/myapp:$BUILD_NUMBER .'
            }
        }
        // log in to nexus, pul from nexus
        stage('Login') {
            steps {
                echo 'Logging in... nexus docker repo'
                // sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                script {
                    withCredentials([usernamePassword(credentialsId: 'nexus-user-credentials', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh ' echo $PASS | docker login -u $USER --password-stdin $NEXUS_DOCKER_REPO'
                    }
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    echo 'Pushing...'
                    sh 'docker push $NEXUS_DOCKER_REPO/myapp:$BUILD_NUMBER'
                // nexusArtifactUploader(
                //     nexusVersion: NEXUS_VERSION
                //     protocol: NEXUS_PROTOCOL
                //     nexusUrl: NEXUS_URL
                //     repository: NEXUS_REPOSITORUY
                //     credentialsId: NEXUS_CREDENTIAL_ID
                // )
                }
            }
        }
//         stage('Deploy') {
//             steps {
//                 sshagent(credentials: ['ssh_agent']) {
//                     sh '''ssh root@172.16.5.14 << 'EOF'
//                           docker compose down
//                           docker pull eastyler/jenkins_learn2:web
//                           docker compose up -d
//                           exit
// EOF
//                           '''
//                 }
//             }
//         }
//         }
//     post {
//         always {
//             sh 'docker logout'
//         }
}
}
