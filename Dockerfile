FROM node:21

COPY ./backend . 

RUN npm i

EXPOSE 4000

CMD ["node", "server.js"]
