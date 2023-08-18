import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItem: CartItem[] = [];

  get itemsCount() : number{
    return this.cartItem.length;
  }

  deleteItem(item: CartItem): void{
    this.cartItem = this.cartItem.filter((_item)=> _item !==item);
  }

  getTotal(): number{
    return this.cartItem.reduce((acc, { price }) => (acc += price), 0);
  }

  addItem(item: CartItem) : void{
    this.cartItem = [...this.cartItem, item];
   }

  //constructor() { }
}
