import { ProductFiltersModule } from './../../components/product-filters/product-filters.module';
import { ProductCardModule } from './../../components/product-card/product-card.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductCardModule,
    ProductFiltersModule,
    NzInputModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
