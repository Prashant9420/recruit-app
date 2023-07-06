FROM node:alpine
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN rm -rf node_modules
COPY ./ ./
RUN npm install
CMD ["npm","start"]
