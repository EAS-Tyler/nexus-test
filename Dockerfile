FROM node:21
# nginx?

COPY ./backend . 

RUN npm i

EXPOSE 4000

CMD ["node", "server.js"]
