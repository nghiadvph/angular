import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servive/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    userpass: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  auth = inject(AuthService);
  // toast = inject(HotToastService);
  router = inject(Router);
  get email() {
    return this.registerForm.get('email');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get userpass() {
    return this.registerForm.get('userpass');
  }
  handleRegister(){
    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        // this.toast.success("Đã đăng kí thành công")
        alert("Đã đăng kí thành công! Vui lòng đăng nhập");
        this.router.navigateByUrl("/login")
      },
      error: (e) => {
         alert("Error"+e.message)
      }
    })
}
}
