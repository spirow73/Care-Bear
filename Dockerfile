# Use a lighter base image for production
FROM node:16-alpine

# Set the working directory
WORKDIR /app/care-bear

# Copy only package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --production

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Set environment variables
ENV PORT=5050

# Expose the port
EXPOSE 5050

# Command to run the application
CMD ["node", "build"]
