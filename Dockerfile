# linux alpine 3.x
FROM node:14

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
