import { NzImageModule } from 'ng-zorro-antd/image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImageComponent } from './product-image.component';

@NgModule({
  declarations: [ProductImageComponent],
  imports: [CommonModule, NzImageModule],
  exports: [ProductImageComponent],
})
export class ProductImageModule {}
