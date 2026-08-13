pipeline {
    agent any

    tools {
        // Tên NodeJS đã cấu hình trong Global Tool Configuration trên Jenkins
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
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