import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInCart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items$: ReplaySubject<ProductInCart[]> = new ReplaySubject<ProductInCart[]>(1);

  private set items(value: ProductInCart[]) {
    this.items$.next(value);
    this._items = value;
  }
  private _items!: ProductInCart[];

  constructor() {
    this.items = [];
  }

  public count(): Observable<number> {
    return this.items$.pipe(map((i: ProductInCart[]) => i.reduce((acc: number, curr: ProductInCart) => acc + curr.quantity, 0)))
  }

  public value(): Observable<number> {
    return this.items$.pipe(
      map(i => i.map(j => (j.quantity * j.product.price))),
      map(i => i.reduce((acc, curr) => acc + curr, 0))
    );
  }

  public add(product: Product): void {
    const prod: ProductInCart | undefined = this._items.find(i => i.product.id === product.id);
    if(prod) {
      prod.quantity += 1;
      this.items = [...this._items];
    } else {
      this.items = [...this._items, { product, quantity: 1}];
    }
  }

  public decrease(id: string): void {
    const prod: ProductInCart | undefined = this._items.find(i => i.product.id === id);
    if(prod) {
      prod.quantity -= 1;
    }
    this.items = [...this._items];
  }

  public remove(id: string): void {
    this.items = this._items.filter(i => i.product.id !== id);
  }

  public get(): Observable<ProductInCart[]> {
    return this.items$.asObservable();
  }


}
