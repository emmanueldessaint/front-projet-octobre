FROM node:18 AS nws-front

WORKDIR /app

COPY . /app
RUN npm ci && npm run build && npm install -g serve

EXPOSE 3006

ENTRYPOINT ["serve", "-s", "build", "-l", "3006"]