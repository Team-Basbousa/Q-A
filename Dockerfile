FROM node:7
WORKDIR /FEC
ADD . /FEC
RUN npm i
EXPOSE 80
CMD ["npm", "start"]