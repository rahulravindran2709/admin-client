#Use docker image from official LTS node
FROM node:boron
#Create a working directory inside the image
RUN mkdir -p /usr/apps/admin-client
RUN mkdir /tmp/src
ADD . /tmp/src
WORKDIR /usr/apps/admin-client
RUN npm config set registry https://registry.npmjs.org/
RUN cp /tmp/src/package.json /usr/apps/admin-client
RUN npm install -g webpack
RUN cd /tmp/src/ && npm install
RUN cp -r /tmp/src/* /usr/apps/admin-client
RUN npm run build
RUN cp -r /usr/apps/admin-client/build /static
CMD ["npm" "run" "start"]

