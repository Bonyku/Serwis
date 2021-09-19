import { Observable } from 'rxjs';
import { Product } from './../../models/product.model';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products$: Observable<Product[]>;

  constructor(private productSrv: ProductService) {
    this.products$ = this.productSrv.getProducts();
  }

  public onType(event: any): void {}
}
