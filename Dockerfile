# Use an official Node.js runtime as a parent image
FROM node:20
RUN apt-get update && apt-get install -y nano

EXPOSE 5000
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Command to run your application
CMD ["npm", "run", "dev"]
