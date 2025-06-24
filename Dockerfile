#####################################
##Author: Pavan
##About: Run an react app  
#####################################

# # -------- Build Stage --------
# FROM ubuntu:22.04 AS build

# # Install dependencies: curl, git, and Node.js prerequisites
# RUN apt-get update && apt-get install -y curl git sudo

# # Install Node.js (NodeSource sets up repo and installs node + npm)
# RUN curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && \
#     apt-get install -y nodejs

# # Clone your GitHub project
# RUN git clone https://github.com/Pavan-OctetSolutions/rtk /app && \
#     rm -rf /app/.git

# # Set working directory
# WORKDIR /app

# # Install dependencies
# RUN npm install --omit=dev

# # -------- Final Stage (distroless) --------
# FROM gcr.io/distroless/nodejs18-debian12

# # Copy built app from previous stage
# COPY --from=build /app /app

# WORKDIR /app

# # Start the app
# CMD ["npm", "run", "dev"]


# Better approach
# -------- Build Stage --------
FROM node:18 AS build

WORKDIR /app

# Install Git and clone
RUN apt-get update && apt-get install -y git && \
    git clone https://github.com/Pavan-OctetSolutions/rtk . && \
    rm -rf .git

# Install dependencies & build
RUN npm install && npm run build

# -------- Production Stage --------
FROM node:18-slim

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

# Copy built React app
COPY --from=build /app/dist ./dist

# Serve it
CMD ["serve", "-s", "dist", "-l", "3000"]