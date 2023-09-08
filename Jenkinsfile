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
      stage('Frontend image build and test')
      {
         steps {
            dir('frontend') {
                sh 'sudo docker build -t gymupp-frontend ./'
            }
         }
      }
   }
}