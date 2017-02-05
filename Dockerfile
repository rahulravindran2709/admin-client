#Use docker image from official LTS node boron
FROM node:boron
#Temporary directory to create node_modules first
RUN mkdir /tmp/src
#Add package.json present in host to temp location in container
ADD ./package.json /tmp/src
#Set registry entry for faster fetches
RUN npm config set registry https://registry.npmjs.org/
#Install globals first
RUN npm install -g webpack
#RUn npm install on the app directory
RUN cd /tmp/src && npm install
#Create a working directory inside the image which is where app will eventually live
RUN mkdir -p /usr/apps/admin-client && cp -ar /tmp/src/node_modules /usr/apps/admin-client
#Set pwd as /usr/apps/admin-client
WORKDIR /usr/apps/admin-client
#Now add the rest of the source from the host directory directly into the app directory
ADD . /usr/apps/admin-client
#Run webpack build
RUN npm run build
#Copy over output files to docker volume
RUN cp -r /usr/apps/admin-client/build /static

