import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  readonly products: Product[] = [
    {
      id: 1,
      imageUrl:'headphones.jpg',
      name: 'HeadPhones',
      price: 50.05,
    },
    {
      id: 2,
      imageUrl:'keyboard.jpg',
      name: 'KeyBoard',
      price: 60.05,
    },
    {
      id: 3,
      imageUrl:'monitor.jpg',
      name: 'Monitor',
      price: 80.45,
    }
  ];
  constructor() { }

  getProduct(idItem: number): Product | null {
    return this.products.find((product)=>product.id === idItem) || null;
  }
}
