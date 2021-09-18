import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductComponent } from './components/product/product.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzImageModule } from 'ng-zorro-antd/image';
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
    NzInputModule,
    NzBadgeModule,
    NzIconModule,
    NzMessageModule,
    NzImageModule    
  ]
})
export class ShopModule { }
