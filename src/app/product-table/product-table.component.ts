import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  selected: Product;
  products: Product[];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.products = this.productService.getProducts();
  }

  // removeItem(id) {
  //   this.products = this.productService.removeProduct(id);
  // }

  showDetail(product){
    this.selected = product;
    console.log(product)
  }

}
