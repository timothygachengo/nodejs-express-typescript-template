# Use an official Node runtime as a parent image
FROM node:16-buster

# Set the working directory to /app
WORKDIR /app/

# Copy package.json to the working directory
COPY package.json .
COPY tsconfig.json ./
COPY src ./src
COPY dist ./dist

# Install any needed packages specified in package.json
RUN npm install
RUN apt-get update
RUN apt-get install -y zip unzip

# Copying the rest of the code to the working directory
COPY . .

# Generate schema files
RUN npm run prisma:generate

# Build typescript files
RUN npm run build

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run index.js when the container launches
CMD ["npm", "start"]