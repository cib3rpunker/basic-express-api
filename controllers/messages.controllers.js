const path = require('path');
// 💛LINUX   folder/file.jpg/
// 💙WINDOWS folder\file.jpg\

function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'santasDeath_Jakub Rozalski.jpg')
  );
  // res.send('<ul><li>Hello Albert!</li></ul>');
}

function postMessages(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessages,
};
