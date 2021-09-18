import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private cart: CartService, private msgService: NzMessageService) { }

  ngOnInit(): void { }

  public buy() {
    this.msgService.info(`Dodano produkt ${this.product.title} do koszyka`)
    this.cart.add(this.product);
  }

  public imageClick(event: MouseEvent): void  {
    event.stopPropagation();
  }

}
