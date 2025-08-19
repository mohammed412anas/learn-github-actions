pipeline {
    agent any
    tools {
        nodejs 'NodeJS 24.5.0'
    }
    stages {
        
        stage('Checkout to project') {
            steps{
                checkout scmGit(branches: [[name: 'feat/implement-feedback']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-example-git-ssh', url: 'git@github.com:mohammed412anas/calculator.git']])
                echo 'This is comming from branch b1'
            }
            
                
            
        }
        
        // stage('Install dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        
        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
        
        // stage('Test') {
        //     steps {
        //         sh "echo 'Hi Anas!'"
        //     }
        // }
    }
    post {
    failure {
        mail to: 'mohammed.anas@everest.engineering',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
        }
    }
}