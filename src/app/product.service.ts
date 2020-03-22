import { Injectable } from '@angular/core';
import { data } from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts() {
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id == id);
  }
  removeProduct(id) {
   return this.products = this.products.filter(product => product.id != id);
  }
  addProduct(product) {

    const newProduct = {
      id: 5, ...product, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      status: false,
      img: 'https://dummyimage.com/700x400/000/fff'
    };
    this.products.push(newProduct);
    console.log(this.products)
  }
}