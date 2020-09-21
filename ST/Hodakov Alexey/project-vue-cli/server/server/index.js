const express = require("express");
const fs = require("fs");
const Basket = require("./services/basket");
const writer = require("./utils/writer");

const server = express();
server.use(express.json());

server.get("/catalog", (req, res) => {
  fs.readFile("./db/catalog.json", "utf-8", (error, data) => {
    if (!error) {
      res.json(JSON.parse(data));
    }
  });
});

server.get("/basket", (req, res) => {
  fs.readFile("./db/basket.json", "utf-8", (error, data) => {
    if (!error) {
      res.json(JSON.parse(data));
    }
  });
});

server.get("/catalogalso", (req, res) => {
    fs.readFile("./db/catalogalso.json", "utf-8", (error, data) => {
      if (!error) {
        res.json(JSON.parse(data));
      }
    });
  });

  server.get("/products", (req, res) => {
    fs.readFile("./db/products.json", "utf-8", (error, data) => {
      if (!error) {
        res.json(JSON.parse(data));
      }
    });
  });

server.post('/basket', (req,res) => {
    fs.readFile('./db/basket.json', 'utf-8', (err, data)=>{
        if (!err) {
            let currentBasket = JSON.parse(data);
            let updateBasket = Basket.add(currentBasket, req.body);
            writer('./db/basket.json', updateBasket)
            .then(answer => {
                if(answer){
                    res.json({status: true});
                }else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.put('/basket/:id', (req,res) => {
    fs.readFile('./db/basket.json', 'utf-8', (err, data)=>{
        if (!err) {
            let currentBasket = JSON.parse(data);
            let updateBasket = Basket.change(currentBasket, req.params.id, req.body.amount);
            writer('./db/basket.json', updateBasket)
            .then(answer => {
                if(answer){
                    res.json({status: true});
                }else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.delete('/basket/:id', (req,res) => {
    fs.readFile('./db/basket.json', 'utf-8', (err, data)=>{
        if (!err) {
            let currentBasket = JSON.parse(data);
            let updateBasket = Basket.delete(currentBasket, req.params.id, req.body.amount);
            writer('./db/basket.json', updateBasket)
            .then(answer => {
                if(answer){
                    res.json({status: true});
                }else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.delete('/clear', (req,res)=>{
    fs.readFile("./db/basket.json", "utf-8", (err, data)=>{
        if(!err){
            let currentBasket = JSON.parse(data);
            let updateBasket = Basket.clear(currentBasket);
            writer('./db/basket.json', updateBasket)
            .then(answer => {
                if(answer){
                    res.json({status: true});
                }else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.listen(3000);
