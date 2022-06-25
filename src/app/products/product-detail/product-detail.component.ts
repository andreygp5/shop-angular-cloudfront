import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!productId) {
      this.router.navigate(['']).then();
      return;
    }

    this.product$ = this.productsService.getProductById(productId);
  }
}
