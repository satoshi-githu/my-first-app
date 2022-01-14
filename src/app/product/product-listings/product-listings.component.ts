import { Component, OnInit } from '@angular/core';
import { ProductService } from '../sharted/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {

  products: any;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    const productsObservable = this.productService.getProducts();

    productsObservable.subscribe(
      (data) => {
        this.products = data;
    },
      (err) => {console.log('何かのエラー' + err)},
    )

  }

}
