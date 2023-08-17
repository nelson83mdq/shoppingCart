import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  
  get cartItem(): CartItem[] {
    return this.shoppingCartService.cartItem;
  }

  constructor(private shoppingCartService: ShoppingCartService ){};

  getTotal(): number{
    return this.shoppingCartService.getTotal();
  }

  deleteItem(itemToDelete: CartItem) {
    this.shoppingCartService.deleteItem(itemToDelete);  
  }

  ngOnInit(): void{};
  
}
