import { HotToastService } from '@ngneat/hot-toast';
import { ProductService } from './../../servive/product.service';
import { Component, inject } from '@angular/core';
import { Product } from '../../servive/product.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product | null = null;
  productService = inject(ProductService);
  router= inject(ActivatedRoute);
  // toast = inject(HotToastService);
    ngOnInit(){
      this.router.params.subscribe((params)=>{
          this.productService.getProductById(params['id']).subscribe({
            next: (data) => {
              this.product = data
            },
            error : (e) => {alert("Error: "+e.message)}
          })
      })
    }
}
