FROM node:18-alpine3.16
WORKDIR /sanj
COPY package.json .
RUN npm i
COPY . .
ENV MODE=dev
EXPOSE 5202
CMD ["node", "index.js"]