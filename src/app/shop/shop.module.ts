import { ShopTopBarModule } from './components/shop-top-bar/shop-top-bar.module';
import { ProductDetailModule } from './_views/product-detail/product-detail.module';
import { ProductListModule } from './_views/product-list/product-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ProductListModule,
    ProductDetailModule,
    ShopTopBarModule,
  ],
})
export class ShopModule {}
