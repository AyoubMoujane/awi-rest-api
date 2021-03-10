FROM node:14
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080
CMD npm run prod