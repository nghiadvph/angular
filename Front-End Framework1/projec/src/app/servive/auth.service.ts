import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export interface User{
  email:string,
  password:string
}
interface Acc{
  token:string,
  data:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:3000/api';
  http=inject(HttpClient);
   register(data:User){
    return this.http.post(`${this.baseURL}/signup`, data);
   }

   login(data:User){
    return this.http.post<Acc>(`${this.baseURL}/signin`, data);
   }
}
