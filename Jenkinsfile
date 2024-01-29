pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('eastyler-dockerhub')
    }
    stages {
        stage('Test') {
            steps {
                echo 'Testing...'
                sh '''cd ./backend
                      npm install
                      npm test'''
            }
        }
        //from sonarcube
        // stage('SonarQube Scan') {
        //     steps {
        //         def scannerHome = tool 'SonarScanner'
        //         withSonarQubeEnv('server-sonar') {
        //             sh "${scannerHome}/bin/sonar-scanner"
        //         }
        // }}
        stage('Scan') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner 4.0'
                    //select sonarqube serevr i want to interact with
                    withSonarQubeEnv(installationName: 'server-sonar', envOnly: true) {
                        println "${env.SONAR_HOST_URL}"
                        sh "${scannerHome}/bin/sonar-scanner"
                    // sh ' '
                    //   sh '/var/lib/jenkins/sonar-scanner-4.6.0.2311-linux/bin/sonar-scanner \ '
                    // sh './mvnw clean org.sonarsource.scanner.maven:sonar-maven-plugin:3.9.0.2155:sonar'
                    // do i need to exec -it int container?
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building docker image'
                sh 'docker build -t eastyler/jenkins_learn2:web .'
            }
        }
        stage('Login') {
            steps {
                echo 'Logging in...'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push') {
            steps {
                echo 'Pushing...'
                sh 'docker push eastyler/jenkins_learn2:web'
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['ssh_agent']) {
                    sh '''ssh root@172.16.5.7 << 'EOF'
                          docker compose down
                          docker pull eastyler/jenkins_learn2:web
                          docker compose up -d
                          exit
EOF
                          '''
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
