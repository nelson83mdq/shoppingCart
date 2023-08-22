import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { HeaderComponent } from './header/header.component';
import { CatalogModule } from './catalog/catalog.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule} from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "catalog",
    component: CatalogComponent
  },
  { 
    path: 'catalog/:id',
    component: ProductDetailsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDrawerComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    ShoppingCartModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
