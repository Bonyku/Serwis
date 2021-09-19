import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-top-bar',
  templateUrl: './shop-top-bar.component.html',
  styleUrls: ['./shop-top-bar.component.scss'],
})
export class ShopTopBarComponent {
  public itemsInCart: Observable<number>;
  public valueOfCard: Observable<number>;

  constructor(private cartService: CartService) {
    this.itemsInCart = this.cartService.count();
    this.valueOfCard = this.cartService.value();
  }
}
