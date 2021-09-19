import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopTopBarComponent } from './shop-top-bar.component';

@NgModule({
  declarations: [ShopTopBarComponent],
  imports: [CommonModule, RouterModule, NzBadgeModule, NzIconModule],
  exports: [ShopTopBarComponent],
})
export class ShopTopBarModule {}
