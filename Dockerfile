FROM node
# nginx?

COPY ./backend . 

RUN npm i

EXPOSE 4000

CMD ["node", "app.js"]

# redundant? 