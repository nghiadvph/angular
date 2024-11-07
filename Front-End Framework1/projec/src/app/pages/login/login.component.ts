import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servive/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    userpass: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ])
  })
  auth = inject(AuthService);
  // toast = inject(HotToastService);
  router = inject(Router);
  get email() {
    return this.loginForm.get('email');
  }
  get userpass() {
    return this.loginForm.get('userpass');
  }
  handleLogin(){
    this.auth.login(this.loginForm.value).subscribe({
      next: (data) => {
        // this.toast.success("Đã đăng kí thành công")
        alert("Đã đăng nhập thành công!");
       localStorage.setItem("user", JSON.stringify(data.data))
        localStorage.setItem("token",data.token)
        this.router.navigateByUrl("/admin")
      },
      error: (e) => {
         alert("Error"+e.message)
      }
    })
}
}
