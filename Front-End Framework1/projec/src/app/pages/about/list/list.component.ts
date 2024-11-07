import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../servive/product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  product: Product[] = [];
  productService = inject(ProductService);
  // toast = inject(HotToastService);
   router = inject(Router);
  ngOnInit() {
    this.productList()
  }
  productList(){
    this.productService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        // this.toast.success("Success!!");
        this.product = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  deleteProduct(_id:string){
    if(confirm("Bạn có muốn xóa ko??")){
       this.productService.deleteProduct(_id).subscribe({
        next: () => {
           alert("Đã xóa!");
           this.productList();
        },
        error: (e) => {
          console.log(e);
        },
       })
    }
}
}
