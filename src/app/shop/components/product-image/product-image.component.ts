import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent {
  @Input() public product!: Product;

  constructor() {}

  public imageClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
