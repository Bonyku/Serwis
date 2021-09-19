import { ProductImageModule } from './../../components/product-image/product-image.module';
import { ShopTopBarModule } from './../../components/shop-top-bar/shop-top-bar.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ShopTopBarModule, ProductImageModule],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
