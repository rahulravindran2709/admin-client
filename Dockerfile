#Use docker image from official LTS node
FROM node:boron
#Create a working directory inside the image
RUN mkdir -p /usr/apps/admin-client
WORKDIR /usr/apps/admin-client
COPY package.json /usr/apps/admin-client
RUN npm install -g webpack
RUN npm install
COPY . /usr/apps/admin-client
EXPOSE 8080
RUN npm run build
CMD ["npm", "start"]

