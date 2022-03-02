const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} delta: ${delta}ms`);
});

//💛 http://localhost:3000/site/index.html
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
