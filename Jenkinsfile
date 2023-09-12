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
               sh 'docker build -t gymupp-frontend ./'
            }
         }
      }
   }
}