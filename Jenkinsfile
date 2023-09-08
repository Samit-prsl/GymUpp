pipeline {
   agent any
   stages 
   {
      stage('Checkout')
      {
         steps {
            checkout scm
         }
      }
      stage('Frontend  build and test')
      {
         steps {
            dir('frontend') {
                sh 'npm install'
                sh 'npm run test'
            }
         }
      }
   }
}