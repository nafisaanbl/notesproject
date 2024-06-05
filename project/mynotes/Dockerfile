# Use an official Node.js runtime as a parent image
FROM node:8

# Set the working directory
WORKDIR /app/

# Copy package.json and package-lock.json
COPY . /app/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]