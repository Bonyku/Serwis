import { ProductImageModule } from './../product-image/product-image.module';
import { RouterModule } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, NzMessageModule, RouterModule, ProductImageModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
