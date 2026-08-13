pipeline {
    agent any

    stages {
        stage('Checkout & Deploy') {
            steps {
                bat 'call D:\\scripts\\deploy.bat'
            }
        }
    }

    post {
        success {
            echo 'Triển khai dự án React thành công vào D:\\WebServer\\ReactApp!'
        }
        failure {
            echo 'Quá trình triển khai thất bại, vui lòng kiểm tra lại log.'
        }
    }
}