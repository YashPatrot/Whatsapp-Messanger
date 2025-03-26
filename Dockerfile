# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed dependencies (including production dependencies)
RUN npm install --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Generate the prisma client
RUN npx prisma generate

# Build the project (if needed, e.g., for TypeScript)
RUN npm run build

# Expose the port your application runs on (adjust if needed)
EXPOSE 3000

# Define environment variables that will be used during the container
ENV NODE_ENV=production

# Define the command to run your application
CMD [ "node", "dist/index.js" ]
