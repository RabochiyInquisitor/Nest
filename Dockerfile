FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g @nestjs/cli
EXPOSE 5000
CMD ["npm", "run", "start:prod"]
