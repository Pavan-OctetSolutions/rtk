#####################################
##Author: Pavan
##About: Run an react app  
#####################################

# -------- Build Stage --------
FROM ubuntu:22.04 AS build

# Install dependencies: curl, git, and Node.js prerequisites
RUN apt-get update && apt-get install -y curl git sudo

# Install Node.js (NodeSource sets up repo and installs node + npm)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && \
    apt-get install -y nodejs

# Clone your GitHub project
RUN git clone https://github.com/Pavan-OctetSolutions/rtk /app

# Set working directory
WORKDIR /app

# Install dependencies
RUN npm install

# -------- Final Stage (distroless) --------
FROM gcr.io/distroless/nodejs22-debian12

# Copy built app from previous stage
COPY --from=build /app /app

WORKDIR /app

# Start the app
CMD ["app.js"]

