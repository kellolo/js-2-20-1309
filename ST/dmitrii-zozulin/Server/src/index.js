import express from 'express';
import cors from 'cors';
import DataBase from './db.js';

const server = express();

const db = new DataBase();

server.use(express.json());
server.use(cors());

server.get('/', (_, res) => {
  res.send(JSON.stringify(db.getAll()));
});

server.post('/basket', (req, res) => {
  const data = req.body;
  db.insert(data);
  res.status(200).send();
});

server.listen(3000);
