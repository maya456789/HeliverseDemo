import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  items: Users[] = [];
  addToCart(product: Users) {
    this.items.push(product);
  }



  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
