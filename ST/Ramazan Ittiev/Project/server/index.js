const express = require('express');
const fs = require('fs');

const server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
  fs.readFile('./json/catalog.json', 'utf-8', (error, data) => {
    if (!error) {
      res.json(JSON.parse(data));
    }
  });
});
server.get('/basket', (req, res) => {
  fs.readFile('./json/basket.json', 'utf-8', (error, data) => {
    if (!error) {
      res.json(JSON.parse(data));
    }
  });
});
server.listen(3000);

// // когда проект полностью готов
// server.use('/', express.static('public'));
