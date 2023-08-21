import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { CartItem } from 'src/app/shopping-cart/cart-item';
import { mapProductToCartItem } from 'src/app/helpers/map-product-to-cart-items-helper';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product!: Product | null;

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router // servicio de navegacion entre urls
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.catalogService.getProduct(Number(productId));

    if (this.product === null){
      this.router.navigate(["catalog"]);
    }

  }

  addToCart(product: Product | null) : void {
    //console.log('pulsado añadir al carrito');
    let item: CartItem = mapProductToCartItem(product!);
    this.scService.addItem(item);
  }

}
