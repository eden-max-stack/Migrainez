# Use Node.js base image
FROM node:18

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Set working directory
WORKDIR /usr/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install dotenv date-fns cookie-parser path express router react-router-dom bootstrap react-bootstrap cors 

# Copy the rest of the application
COPY . .

# Create a virtual environment and install Python dependencies
RUN python3 -m venv /usr/app/venv && \
    /usr/app/venv/bin/pip install --no-cache-dir --progress-bar on -r ./requirements.txt


# Expose the port
EXPOSE 8084

# Start the application
CMD ["npm", "start"]
