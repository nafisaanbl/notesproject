pipeline {
    agent {
        docker {
            image 'python:3-slim'
            label 'docker'
        }
    }
    environment {
        DOCKER_IMAGE = 'python:3-slim'
        DOCKER_TAG = 'latest'
    }
    stages{
        stage("Clone Code"){
            steps {
                echo "Cloning the code"
                git url:"https://github.com/nafisaanbl/notesproject.git", branch: "main"
            }
        }
        stage("Build"){
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    echo "Building the image"
                    bat "docker build -t notes-app ."
                }
            }
        }
        stage("Push to Docker Hub"){
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPass', usernameVariable: 'dockerHubUser')]) {
                        bat """
                        docker tag notes-app ${env.dockerHubUser}/notes-app:latest
                        docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${env.dockerHubUser}/notes-app:latest
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