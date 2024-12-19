const express = require('express');
const server = express();
const port = process.env.PORT || 4000;
const vid = require('./apis/down/ytvd.js');
const aud = require('./apis/down/ytaud.js');
const { error } = require('console');

server.get('/', (req, res) => {
    res.status(404).json({status: 404});
})

// Rotas download youtube

server.get('/ytmp4/https://www.youtube.com/watch', (req, res) => {
    var url = req.query.v;
    var url = 'https://www.youtube.com/watch?v=' + url;
    vid(res, url);
});

server.get('/ytmp3/https://www.youtube.com/watch', (req, res) => {
    var url = req.query.v;
    var url = 'https://www.youtube.com/watch?v=' + url;
    aud(res, url);
});

server.get('/ytmp4/https://youtu.be/:id', (req, res) => {
    var si = req.query.si;
    var url = 'https://www.youtube.com/watch?v=' + req.params.id;
    vid(res, url);
});

server.get('/ytmp3/https://youtu.be/:id', (req, res) => {
    var si = req.query.si;
    var url = 'https://www.youtube.com/watch?v=' + req.params.id;
    aud(res, url);
});

// fim download youtube

console.log('Apis rodando!');
server.listen(port, () => {
    console.log(`rodando na porta: ${port}`)
             );
