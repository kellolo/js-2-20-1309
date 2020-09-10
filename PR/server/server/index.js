const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
    // res.send(JSON.stringify({test: 1}))
    // res.json({test: 100500})
    fs.readFile('./db/catalog.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
})

// server.get('/basket'...)
// прочитать доку по express, nodeJS

server.listen(3000)
//когда проект полностью готов
// server.use('/', express.static('public'))
//когда проект полностью готов

// server.get('/', (req, res) => {
//     // res.send('Hello')
//     res.send('<h1>HELLO</h1>')
// })

// server.post()

