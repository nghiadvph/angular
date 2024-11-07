import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../servive/product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  productService = inject(ProductService);
  router = inject(Router);

  onCraete : FormGroup = new FormGroup({
    name:  new FormControl('',[ Validators.required, Validators.minLength(3)]),
    price: new FormControl('',[Validators.required,Validators.minLength(0)]),
    description : new FormControl('',[ Validators.required]),
    image: new FormControl('',[ Validators.required]),
    startAt: new FormControl(''),
    bidTime: new FormControl(''),
  })
   get name(){
    return this.onCraete.get('name')
   }
   get price(){
    return this.onCraete.get('price')
   }
   get description(){
    return this.onCraete.get('description')
   }
   get image(){
    return this.onCraete.get('image')
   }
  handleCraete(){
      this.productService.craeteProduct(this.onCraete.value).subscribe({
        next: ()=>{
            alert("Đã thêm thành công");
            this.router.navigateByUrl('/admin/product-list')
        },
        error : (e)=>{ alert("Error:"+e.message)}
      })
  }
}
