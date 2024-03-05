FROM node:21.0.0
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]