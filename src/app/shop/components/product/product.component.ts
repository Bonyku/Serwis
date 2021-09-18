import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void { }

}
