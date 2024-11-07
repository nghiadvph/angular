import { HotToastService } from '@ngneat/hot-toast';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 const user =  JSON.parse(localStorage.getItem("user")|| "{}");
  const token = localStorage.getItem('token');
  
  if (!token) {
    alert("Email ko tồn tại")
    router.navigate(['/login']);
    return false;
  }
  return true;
};