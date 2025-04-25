# Get the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app .

# Copy the package.json and package-lock.json files 
COPY package*.json ./

# Install the dependencies 
RUN npm install

# Copy the source code 
COPY . .

# Expose the port the app runs on
EXPOSE 27017

# Start the application
CMD ["npm","start"]





