import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, Observable, of, ReplaySubject } from 'rxjs';
import { Product } from '../models/product.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    this.products = this.httpClient.get<any>('https://random.dog/woof.json').pipe(map(i => (
      [{ id: '1', title: 'i5-4790', imageUrl: i.url , description: 'aaaaa'}]
    )))

  }

  public getProducts(): Observable<Product[]> {
    return this.products;
  }

}
