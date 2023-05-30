import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import _ from 'lodash';
import { Product } from './product.model';
import { validate } from 'class-validator';

console.log(_.shuffle([1, 2, 3, 4]));

const newProduct = new Product('', -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});

const products = [
  {
    title: 'A Carpet',
    price: 29.99,
  },
  {
    title: 'A Book',
    price: 10.99,
  },
];

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance<Product, object>(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
