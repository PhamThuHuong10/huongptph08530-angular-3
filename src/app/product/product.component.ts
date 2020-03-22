import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../Product';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @Input('data') product: Product;

  product: Product;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
        this.product = this.productService.getProduct(param.id);
        console.log(param);
    }
    )
  }

}
