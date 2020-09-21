const express = require('express');
const fs = require('fs');
const Basket = require('./services/basket-service');
const writer = require('./utils/writer');

const server = express();

server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./db/catalog.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
})

server.get('/basket', (req, res) => {
    fs.readFile('./db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
})

server.post('/basket', (req, res) => {
    fs.readFile('./db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.add(oldB, req.body);
            writer('./db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.put('/basket/:id', (req, res) => {
    fs.readFile('./db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.change(oldB, req.params.id, req.body.amount);
            writer('./db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.delete('/basket/:id', (req, res) => {
    fs.readFile('./db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.delete(oldB, req.params.id);
            writer('./db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.listen(3000)

