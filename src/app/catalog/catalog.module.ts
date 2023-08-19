import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';

@NgModule({
  declarations: [CatalogComponent, CatalogProductComponent],
  imports: [
    CommonModule
  ],
  exports: [CatalogComponent] //sin esto la app no reconoce el selector app-catalog
})
export class CatalogModule { }
