const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Albert Einstein',
  },
  {
    id: 1,
    name: 'Sir Issac Newton',
  },
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
