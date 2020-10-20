FROM node:7
WORKDIR /FEC
RUN mkdir /FEC
ADD . /FEC
RUN npm i
EXPOSE 80
CMD ["npm", "start"]