# Dockerfile - Node + Puppeteer
FROM node:18-bullseye-slim

# Install dependencies for Puppeteer/Chromium
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
  --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install (will download chromium as part of puppeteer)
COPY package.json package-lock.json* ./
RUN npm install --unsafe-perm --silent

# Copy app
COPY . .

# Expose port
EXPOSE 3000

# Default env (override PDF_API_KEY in docker run)
ENV PORT=3000

CMD ["node", "server.js"]
