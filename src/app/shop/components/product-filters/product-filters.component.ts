import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRange } from 'src/app/core/models/range';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit {
  public priceRange$: Observable<IRange<number>> = of({ start: 0, end: 0 });
  public productCategories$: Observable<ProductCategory[]> = of([]);

  constructor(private productService: ProductService) {
    this.priceRange$ = this.productService.getPriceRange();
    this.productCategories$ = this.productService.getProductCategories();
  }

  ngOnInit(): void {}
}
