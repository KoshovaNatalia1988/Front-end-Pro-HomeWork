var express = require('express');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) { // разрешаем всем видам запроса работать с нашим сервером.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
let users  = [
  { title: 'Title1', size: 100, img: 'url' , cost: 300}, 
  { title: 'Title2', size: 200, img: 'url',cost: 300 }, 
  { title: 'Title3', size: 150, img: 'url', cost: 300 },
  { title: 'Natalia', size: 150, img: 'url', cost: 300 }
  
];
app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
    res.send('ok');
    
});
app.get('/users', function (req, res) { // req - обьект запроса, res -- обьект ответа
  console.log('call users');
    res.send(users);
    console.log('and users');
});
app.get('/user', function (req, res) { // req - обьект запроса, res -- обьект ответа
  function lastUsers(mass) {
     let lastUser = mass[mass.length - 1];
     return lastUser;
  } 
  let lastUser = lastUsers(users);
  res.send(JSON.stringify(lastUser));
  
});
app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000');
});
