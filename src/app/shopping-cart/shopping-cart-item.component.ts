import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {
  @Input() cart_item!: CartItem;  // ! anula el error de que no esta asignado inmediatamente

  @Output() cartItemDelete = new EventEmitter<void>();
  // creo con output un evento nuevo para un boton creado

  Constructor(){}

  onDeleteClicked(): void{
    this.cartItemDelete.emit();
  }
}
