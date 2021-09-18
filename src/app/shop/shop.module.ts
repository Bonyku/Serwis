import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductComponent } from './components/product/product.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NzInputModule
  ]
})
export class ShopModule { }
