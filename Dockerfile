# Dockerfile - Node + Puppeteer (Debian slim)
FROM node:18-bullseye-slim

# Install libs required by Chromium
RUN apt-get update && apt-get install -y \
  ca-certificates \
  fonts-liberation \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libdrm2 \
  libgbm1 \
  libgtk-3-0 \
  libnspr4 \
  libnss3 \
  libx11-6 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  wget \
  gnupg \
  && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Copy package files first for better Docker cache
COPY package.json package-lock.json* ./

# Install dependencies (this will download Chromium as part of puppeteer)
RUN npm ci --unsafe-perm --no-audit --progress=false

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

ENV PORT=3000
# Start the server
CMD ["node", "server.js"]
