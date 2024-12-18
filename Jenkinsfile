pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'siivaneshswaminathan' // Replace with your Docker Hub username
        IMAGE_NAME = 'jai'          // Replace with your image name
        BRANCH = 'main'                          // Branch to pull from
        REPO_URL = 'https://github.com/siivanesh/Aquarius.git' // Replace with your GitHub repo URL
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repository from GitHub..."
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${BRANCH}"]],
                    userRemoteConfigs: [[url: "${REPO_URL}", credentialsId: 'your-credentials-id']]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    // Build the Docker image
                    sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                script {
                    // Log in to Docker Hub and push the image
                    withDockerRegistry([credentialsId: 'hanuman', url: '']) {
                        sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                echo "Deploying the Docker container..."
                script {
                    // Run the Docker container
                    sh """
                    docker run -d --name ${IMAGE_NAME} -p 4500:5173 ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            script {
                // Clean up dangling images
                sh "docker image prune -f"
            }
        }
    }
}
