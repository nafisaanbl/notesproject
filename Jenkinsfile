pipeline {
    agent any 
    
    stages{
        stage("Clone Code"){
            steps {
                echo "Cloning the code"
                git url:"https://github.com/nafisaanbl/notesproject.git", branch: "main"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                bat "docker build -t notes-app ."
            }
        }
        stage("Push to Docker Hub"){
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh """
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker logout
                        """
                    }
                }
            }
            //     script {
            //         withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]) {
            //         }
            //     }
            //     echo "Pushing the image to docker hub"{
            //     bat "docker tag notes-app ${env.dockerHubUser}/notes-app:latest"
            //     bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
            //     bat "docker push ${env.dockerHubUser}/notes-app:latest"
            //     }
            // }
        }
        stage("Deploy"){
            steps {
                echo "Deploying the container"
                bat "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}