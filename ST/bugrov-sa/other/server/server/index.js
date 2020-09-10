const express = require('express');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');

const server = express();

server.use(express.json());
server.get('/catalog', (req, res) => {
    // res.json({test: 1});
    fs.readFile('./db/catalog.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
});

server.get('/basket', (req, res) => {
    fs.readFile('./db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
});

//server.use('/', express.static('public'));


// server.get('/', (req, res) => {
//     res.send('Hello');
// });

server.listen(3000);