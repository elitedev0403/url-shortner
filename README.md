# URL Shortener

## Overview
This project is designed to Allow users to create short versions of links to make them easier to speak and share.
For example, https://some.place.example.com/foo/bar/biz being shorted to
https://short.ly/abc123.
It utilizes Docker and Docker Compose for easy setup and deployment.

## Prerequisites
Make sure you have the following installed on your machine:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/elitedev0403/url-shortner.git
cd url-shortner
```

2. Build the Docker Images
Run the following command to build the Docker images defined in the docker-compose.yml file:

```bash
docker-compose build
```

3. Start the Application
After the images have been built, you can start the application with:

```bash
docker-compose up
```

4. Access the Application
Once the application is running, you can access it at http://localhost:5173.

Stopping the Application
To stop the application, use:

```bash
docker-compose down
```

