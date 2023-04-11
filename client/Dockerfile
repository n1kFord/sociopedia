# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . .

EXPOSE 3000

# Set the command to start the React app
CMD ["npm", "start"]