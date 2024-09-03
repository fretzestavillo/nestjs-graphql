# Use a specific Node.js version
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies including rimraf
RUN npm install --legacy-peer-deps

# Copy the rest of your application code
COPY . .

# Clean the build directory and build the application
RUN npm run clean && npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
