import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public search: string = '';

  public products$: Observable<Product[]>;

  public itemsInCart: Observable<number>;
  public valueOfCard: Observable<number>;

  constructor(private productSrv: ProductService, private cartService: CartService) { 
    this.products$ = this.productSrv.getProducts();
    this.itemsInCart = cartService.count();
    this.valueOfCard = cartService.value();
  }

  ngOnInit(): void { }

  public onType(event: any) {
    console.log(event);
  }

}
