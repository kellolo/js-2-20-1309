import fs from 'fs';

export default class DataBase {
  constructor() {
    this.basket = {};

    fs.readFile('./basket.json', (err, data) => {
      if (err) throw err;
      this.basket = JSON.parse(data);
    });
  }

  insert(data) {
    try {
      const jsonData = JSON.stringify(data);
      this.basket = jsonData;
      fs.writeFile('./basket.json', String(this.basket), err => {
        throw new Error(err);
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  getAll() {
    console.log(this.basket);
    return this.basket;
  }
}
