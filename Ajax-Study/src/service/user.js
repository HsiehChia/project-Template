const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.send('hello user')
})

app.listen(8000, () => {
  console.log('on server: 8000 port');
})