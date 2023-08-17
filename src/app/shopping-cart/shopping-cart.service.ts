import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItem: CartItem[] = [
    {
      imageUrl:'headphones.jpg',
      name: 'HeadPhones',
      price: 50.05,
    },
    {
      imageUrl:'keyboard.jpg',
      name: 'KeyBoard',
      price: 60.05,
    },
    {
      imageUrl:'monitor.jpg',
      name: 'Monitor',
      price: 80.45,
    }
];

  get itemsCount() : number{
    return this.cartItem.length;
  }

  deleteItem(item: CartItem): void{
    this.cartItem = this.cartItem.filter((_item)=> _item !==item);
  }

  getTotal(): number{
    return this.cartItem.reduce((acc, { price }) => (acc += price), 0);
  }

  constructor() { }
}
