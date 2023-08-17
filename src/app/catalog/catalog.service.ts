import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  readonly products: Product[] = [
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
  constructor() { }
}
