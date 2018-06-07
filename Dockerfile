FROM node:9

WORKDIR /home/node/app

# Copy root to working directory
COPY . .

EXPOSE 8080
EXPOSE 3000
EXPOSE 8989

CMD ["npm", "start"]