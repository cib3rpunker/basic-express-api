const express = require('express');
const friendsController = require('./controllers/friends.controllers');
const messagesController = require('./controllers/messages.controllers');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} delta: ${delta}ms`);
});

app.use(express.json());

app.get('/friends', friendsController.getFriends);
// GET /friends/10
app.get('/friends/:friendId', friendsController.getFriend);
app.post('/friends', friendsController.postFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
