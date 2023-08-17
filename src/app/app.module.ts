import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { HeaderComponent } from './Header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
