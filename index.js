const express = require('express');
const app = express();

app.listen(8080, () => {
  console.log('server started')
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
