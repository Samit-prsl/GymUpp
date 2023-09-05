pipeline {
    agent any

    stages {
         stage('Installing dependencies for ./frontend and ./backend')
         {
            echo 'Installing dependencies for frontend'
            sh 'cd frontend && npm install' 
            echo 'Installing dependencies for backend'
            sh 'cd backend && npm install'
         }
         stage('Dockerization')
         {
            echo 'Dockerization starts'
            sh 'docker run -p 3000:3000 -d '
         }   
    }
}