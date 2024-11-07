import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export interface Product{
  _id:string,
  name:string,
  price:number,
  image:string,
  description:string,
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:3000/api/products'
  http= inject(HttpClient);
  getAll(){
   return this.http.get<Product[]>(this.baseURL);
  }
  getProductById(id:string){
    return this.http.get<Product>(`${this.baseURL}/${id}`);
   }
   deleteProduct(id:string){
    return this.http.delete<Product>(`${this.baseURL}/${id}`);
   }
   craeteProduct(data: Product){
     return this.http.post(this.baseURL,data)
   }
}
