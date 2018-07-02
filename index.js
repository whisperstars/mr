const express = require('express');
const app = express();
const fs = require('fs');

app.listen(8080, () => {
  console.log('server started')
});

app.get('/write', function (req, res) {
  res.send(fs.writeFileSync('/data/a.txt', 'hello World'));
  res.send('writed to file');
});

app.get('/read', function (req, res) {
  res.send(fs.readFileSync('/data/a.txt', 'UTF8'));
});
