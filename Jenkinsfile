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
        stage("Deploy"){
            steps {
                echo "Deploying the container"
                bat "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}