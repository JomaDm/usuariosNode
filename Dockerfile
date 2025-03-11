FROM node:21
WORKDIR /app
COPY . /app
ENV PORT=3000
ENV MONGODB_URI=mongodb://root:root@mongo:27017
EXPOSE 3000
RUN npm uninstall bcrypt
RUN npm install bcrypt
RUN npm install
CMD ["npm", "run", "dev"]