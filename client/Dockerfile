FROM node:17-alpine

COPY package.json package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]