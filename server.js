var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

app.listen(8888, function(){
	console.log('You are tuned in to port 8888');
})