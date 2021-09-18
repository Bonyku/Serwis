import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInCart } from '../shop/models/cart.model';
import { CartService } from '../shop/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Observable<ProductInCart[]>;

  constructor(private cart: CartService) { 
    this.items = cart.get();
  }

  ngOnInit(): void { }

}
