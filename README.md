# Product Search Microservice

### Overview
This microservice will be designed to integrate third-party APIs and perform data transformation,
ensuring that results are prepared according to input parameters. 
The service should be developed using ExpressJs framework and Node.js server.

### Requirements
`node 20`

## How to run project locally? 

### Run with Docker
1. Copy .env.example file and name as .env - `cp .env.example .env`
2. To start project locally run this command: `docker-compose -f docker-compose.dev.yml up --build`

#### Troubleshooting
_If docker container start failed check  `PORT 5000` or change it in `Dockerfile`_

### Run with local Node
1. Make sure you have `node 20` or switch your existing node using `nvm`
2. Run `nvm i 20`, then `nvm use 20`
3. Install project dependencies using `npm i` command
4. Copy .env.example file and name as .env - `cp .env.example .env`
5. You can change `PORT` in .env file if needed
6. Start in development mode `npm run dev`

## How to run on production
1. Install `node 20`
2. Install project dependencies using `npm i` command
3. Start in production mode `npm run prod`
