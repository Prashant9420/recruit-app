FROM node:alpine
WORKDIR .
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./ ./
CMD ["npm","start"]
