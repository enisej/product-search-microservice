# Product Search Microservice

### Overview
This microservice will be designed to integrate third-party APIs and perform data transformation,
ensuring that results are prepared according to input parameters. 
The service should be developed using Express.js framework and Node.js server.

### Requirements
`node 20`

## How to run project locally? 

### Run with Docker
1. Copy .env.example file and name as .env - `cp .env.example .env`
2. To start project locally run this command: `docker-compose -f docker-compose.dev.yml up --build`

#### Troubleshooting
_If docker container start failed check  `PORT 5000` or change it in `Dockerfile`_

#### How to get into docker container
_Make sure that your docker container is running with `docker ps` command `PORT 5000`_
####
_Run this command `docker exec -it products-search-service /bin/bash`_


### Run with local Node
1. Make sure you have `node 20` or switch your existing node using `nvm`
2. Run `nvm install 20`, then `nvm use 20`
3. Install project dependencies using `npm install` command
4. Copy .env.example file and name as .env - `cp .env.example .env`
5. You can change `PORT` in .env file if needed
6. Start in development mode `npm run dev`

## How to run on production
1. Install `node 20`
2. Install project dependencies using `npm install --production` command
3. Start in production mode `npm run prod`

## Available tools commands

1. `npm run dev` - run development environment
2. `npm run prod` - run production environment
3. `npm run lint` - run eslint 
4. `npm run test` - run jest automated tests
5. `npm run commit` - helper tool to make [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Additional Tasks Completed

1. [X] Logging 
2. [X] Data input-output formats
3. [X] Add automated tests **(partly)**
4. [X] Add Eslint
5. [X] Vue JS Form