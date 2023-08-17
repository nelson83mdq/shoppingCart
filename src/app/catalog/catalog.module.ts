import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductComponent } from './catalog-product.component';
import { CatalogComponent } from './catalog.component';



@NgModule({
  declarations: [
    CatalogProductComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
