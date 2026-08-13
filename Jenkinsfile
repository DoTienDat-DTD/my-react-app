pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'cmd /c npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'cmd /c npm run build'
            }
        }
    }

    post {
        success {
            echo 'Build project React thành công!'
        }
        failure {
            echo 'Build thất bại, vui lòng kiểm tra lại log.'
        }
    }
}