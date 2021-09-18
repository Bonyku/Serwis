import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, fromEvent, merge, Observable, of, ReplaySubject } from 'rxjs';
import { Product } from '../models/product.model';

import { map, mergeAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(search?: string, filters?: {[index: string]: string | string[] } ): Observable<Product[]> {
    return combineLatest([
      this.httpClient.get<any>('https://random.dog/woof.json'),
      this.httpClient.get<any>('https://random.dog/woof.json')
    ]).pipe(
      map((i: any[]) => {
        return i.map((j, id) => ({ id: `${id}`, price: (id + 1) * 600, title: 'Procesor Intel i5-4790 3.5Ghz ', imageUrl: j.url }))
      })
    );
    
  }


}