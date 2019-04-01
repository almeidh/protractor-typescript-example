# Use an official node image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install needed packages
RUN apk add --no-cache bash
RUN npm install -g protractor@5.4.2
RUN webdriver-manager update

#Install dependencies inside container
RUN npm install

# Run tests when the container launches
CMD npm test