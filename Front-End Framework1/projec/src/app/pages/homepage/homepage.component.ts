// import { HotToastService } from '@ngneat/hot-toast';

import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {Product,ProductService } from '../../servive/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  product: Product[] = [];
  productService = inject(ProductService);
  // toast = inject(HotToastService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        // console.log(data);
        // this.toast.success("Success!!");
        this.product = data;
      },
      error: (e) => {
        console.log(e);
        // this.toast.error('Error: ' + e.message);
      },
    });
  }

  
}
