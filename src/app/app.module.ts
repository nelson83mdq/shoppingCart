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

const routes: Routes = [
  {
    path: "catalog",
    component: CatalogComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: 'catalog/:id',
    component: CatalogComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDrawerComponent,
    ContactComponent
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
