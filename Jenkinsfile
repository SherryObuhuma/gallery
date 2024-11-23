pipeline{
    agent any
    
    tools{
        gradle 'gradle'
    }
    
    stages{
        stage('Clone a repository'){
            steps{
                git branch: 'master', url: 'https://github.com/SherryObuhuma/gallery'
            }
        }
        stage('Build the code'){
            steps{
                sh 'gradle build' 
            }
        }
        stage('Test the code'){
            steps{
                sh 'gradle test'
            }
        }
        stage('Install npm dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Deploy to render'){
            steps{
                sh 'node server.js'
            }
        }
        
    }
}