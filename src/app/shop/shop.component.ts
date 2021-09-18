import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public search: string = '';

  public products$: Observable<Product[]>;

  constructor(private productSrv: ProductService) { 
    this.products$ = this.productSrv.getProducts();
  }

  ngOnInit(): void { }

  public onType(event: any) {
    console.log(event);
  }

}
