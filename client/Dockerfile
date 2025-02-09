FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3006
ENV PORT 3006
CMD ["npm", "start"]
