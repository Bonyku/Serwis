import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from './product-filters.component';

@NgModule({
  declarations: [ProductFiltersComponent],
  imports: [CommonModule, NzInputModule, NzSliderModule, NzSelectModule],
  exports: [ProductFiltersComponent],
})
export class ProductFiltersModule {}
