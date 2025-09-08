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

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

# Ensure Puppeteer will download Chromium and use npm install (more tolerant than npm ci)
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
ENV PUPPETEER_PRODUCT=chrome
RUN npm install --unsafe-perm --no-audit --progress=false && npm cache clean --force

COPY . .

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
