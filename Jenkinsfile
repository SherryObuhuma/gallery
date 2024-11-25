pipeline{
    agent any
    
    tools{
        gradle 'gradle'
    }

    environment {
        RENDER_SITE_URL = 'https://dashboard.render.com/web/srv-ct0n7te8ii6s73f7obt0/events'
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
                sh '/usr/bin/npm install'
            }
        }
        stage('Deploy to render'){
            steps{
                sh 'node server.js'
            }
        }
        
    }
    post {
        success{
            slackSend(
                channel: '#sherry_ip1',
                color: 'good',
                username: 'Jenkins Bot',
                iconEmoji: ':rocket',
                message: """
                :white_check_mark: *Deployment Successful!*
                - *Job Name*: ${env.JOB_NAME}
                - *Build ID*: ${env.BUILD_ID}
                - *Build Number*: ${env.BUILD_NUMBER}
                - :link: [View Site](${RENDER_SITE_URL})
                """
            )
        }
        failure {
            slackSend(
                channel: '#sherry_ip1',
                color: 'danger',
                message: """
                :x: *Deployment Failed!*
                - *Job Name*: ${env.JOB_NAME}
                - *Build ID*: ${env.BUILD_ID}
                - *Build Number*: ${env.BUILD_NUMBER}
                - :link: [Check Render Site](${RENDER_SITE_URL})
                """
            )
        }
    }
}