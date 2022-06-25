import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartCountControlsModule } from '../core/cart-count-controls/cart-count-controls.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductsRoutingModule} from "./products-routing.module";

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CartCountControlsModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
