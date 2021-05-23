pipeline {

   agent any

   stages {
       stage('Test') {
           steps {
              sh "docker-compose -f docker-compose.yml -f docker-compose.test.yml up --build --abort-on-container-exit --exit-code-from e2e"
           }
       }
   }
   post {
      always {
         sh "docker-compose down || true"
      }
   }   
}