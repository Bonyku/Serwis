import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../models/product.model';

import { map } from 'rxjs/operators';

import { IRange } from '../../core/models/range';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  public getProductById(id: string): Observable<Product> {
    return this.httpClient
      .get<any>('https://random.dog/woof.json')
      .pipe(map((i) => this.testApiToProduct(i, Number.parseInt(id, 10))));
  }

  public getProducts(
    search?: string,
    filters?: { [index: string]: string | string[] }
  ): Observable<Product[]> {
    return combineLatest([
      this.httpClient.get<any>('https://random.dog/woof.json'),
      this.httpClient.get<any>('https://random.dog/woof.json'),
    ]).pipe(map((i: any[]) => i.map((j, id) => this.testApiToProduct(j, id))));
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return of(['Komputer Stacjonarny', 'Laptop', 'Procesor']);
  }

  public getPriceRange(): Observable<IRange<number>> {
    return of({ start: 150, end: 14000 });
  }

  private testApiToProduct(testApi: { url: string }, i: number): Product {
    return {
      id: `${i}`,
      price: (i + 1) * 600,
      title: 'Procesor Intel i5-4790 3.5Ghz ',
      imageUrl: testApi.url,
    };
  }
}
