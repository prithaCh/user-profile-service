# user-profile-service

- [user-profile-service](#user-profile-service)
  - [Description](#description)
  - [Pre-requisite](#pre-requisite)
  - [To run the application](#to-run-the-application)
  - [Build docker image and run locally](#build-docker-image-and-run-locally)
  - [Run user-profile-service docker container from DockerHub](#run-user-profile-service-docker-container-from-dockerhub)
  - [Tech stack](#tech-stack)
  - [TODO](#todo)

## Description

User profile service exposes API's for user registration

1. Create user profile
2. Delete user profile
3. Modify user profile
4. Retrieve user profile

`routes.js` file contains the list of REST endpoints
Front-end UI / mobile apps can consume the exposed backend endpoints from this micro-service

---

## Pre-requisite

1. Mongo DB backend
2. npm packages - express, mongoose, cors

---

## To run the application

1. Clone the git repository
`git clone <https/ssh>:raghavendrarao4/user-profile-service.git`
2. Install npm packages - express, mongoose, cors \
Run `npm install`
3. Run `node server.js` from command prompt
4. Verify the application on http://localhost:8081

---

## Build docker image and run locally

1. Run `docker build . -t <user-name>/user-profile-service`

2. Run `docker run -p 8081:8081 -d <user-name>/user-profile-service`

3. Verify the application on http://localhost:8081/

Note: Replace `<user-name>` with your desired value.

---

## Run user-profile-service docker container from DockerHub

1. Start your docker server (docker desktop or minikube)
2. Pull the user-feedback-service docker image from [DockerHub](https://hub.docker.com/repository/docker/pranab698/user-profile-service/tags?page=1&ordering=last_updated) \
`docker pull pranab698/user-feedback-service:latest`

3. Run \
`docker run -p 8081:8081 -d pranab698/user-profile-service`

4. Verify the application on http://localhost:8081/

---

## Tech stack

- Express
- Mongo DB
- Mongoose

---

## TODO

- App is verified locally, yet to be deployed & tested on cloud environment.