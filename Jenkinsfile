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
         }   
    }
}