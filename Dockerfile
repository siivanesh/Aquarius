# Step 1: Use an official Node.js image from Docker Hub as the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (for dependencies) into the container
COPY package*.json ./

# Step 4: Install the application dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port the application will run on (optional)
EXPOSE 5173

# Step 7: Command to run the application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
