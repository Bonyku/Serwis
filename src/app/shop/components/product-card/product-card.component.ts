import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private cart: CartService,
    private msgService: NzMessageService
  ) {}

  ngOnInit(): void {}

  public buy(event: MouseEvent) {
    this.msgService.info(`Dodano produkt ${this.product.title} do koszyka`);
    this.cart.add(this.product);
    event.stopPropagation();
  }
}
