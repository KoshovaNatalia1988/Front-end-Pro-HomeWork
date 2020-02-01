var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
});
function usersReadFile(parseBody, res) {
    fs.readFile("foo.json", 'utf-8', function(err, content) {
        if(err) console.log("no found");
        content = JSON.parse(content);
        console.log(content);
        let id = checkUsers(content,parseBody);
        if(!id) {
            res.status(401);
            res.send(JSON.stringify('Not found'));
        } else {
            res.status(200);
            res.send(JSON.stringify(id));
        }
    });
};
function checkUsers(content,parseBody) {
    for( let i = 0; i < content.length; i++) {
       if(content[i].login == parseBody.login && content[i].password == parseBody.password) {
           return content[i].id;
       }  
    }
    return false;
};
app.post('/users', function (req, res) { // req - обьект запроса, res -- обьект ответа
    console.log(123);
    let body = req.body;
    let parseBody = JSON.parse(body);
    console.log(parseBody);
    usersReadFile(parseBody,res);
});
function goodsReadFile(urlToJson,res) {
    fs.readFile(urlToJson, 'utf-8', function(err, content) {
        if(err) console.log("no found");
        content = JSON.parse(content)
        console.log(content,'content')
        res.send(JSON.stringify(content));   
    })
};
app.post('/goods', function (req, res) { // req - обьект запроса, res -- обьект ответа
    let id = JSON.parse(req.body);
    console.log(id,'id');
    let urlToJson = 'goods/' + id + '.json';
    goodsReadFile(urlToJson,res);   
});
app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000');
});