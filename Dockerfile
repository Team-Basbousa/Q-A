FROM node:7
RUN mkdir /FEC
ADD . /FEC
WORKDIR /FEC
RUN npm i
EXPOSE 80
CMD ["npm", "start"]