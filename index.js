const express = require('express');
const path = require('path');

const wordList1 = require('./chemistry-words');
const wordList2 = require('./physics-words');
const wordList3 = require('./biology-words');
//const bodyParser = require('body-parser');

const app = express();



app.get('/api', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/chemistry-words', function(req, res){
    res.json(wordList1);
});

app.get('/api/physics-words', function(req, res){
    res.json(wordList2);
});

app.get('/api/biology-words', function(req, res){
    res.json(wordList3);
});


port = process.env.PORT || 3000;

app.listen(port);

console.log('science words api started on: ' +port);