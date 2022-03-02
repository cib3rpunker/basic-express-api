const express = require('express');

// const friendsController = require('./controllers/friends.controllers');
const friendsController = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('IP Address: ', req.ip);
  next();
});

friendsRouter.get('/', friendsController.getFriends);
// GET /friends/10
friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriend);

module.exports = friendsRouter;
