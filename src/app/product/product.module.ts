import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './sharted/product.service';

const routes: Routes = [
  { path: 'products', component: ProductComponent,
    children: [
       { path: '', component: ProductListingsComponent },
       { path: ':productId', component: ProductDetailComponent }
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListingsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule { }
