import { Item } from '../Entity/Item';

export const Product = {
  getProduct: () => {
    const producList = [];

    for (var i = 1; i < 30; i++) {
      var p = new Item();
      p.id = i + 1;
      p.name = `name: ${i}`;
      p.summary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit: ${i}`;
      p.category = `category: ${i}`;
      p.image = 'https://loremflickr.com/640/480/groceries';
      p.price = ((Math.random() + 1) * 30).toFixed(2);

      producList.push(p);
    }

    return producList;
  }
};