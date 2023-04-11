# Use an official Node.js image as the base image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Expose port 3001 for the Express.js backend
EXPOSE 3001

# Command to run the Express.js backend
CMD ["npm", "start"]