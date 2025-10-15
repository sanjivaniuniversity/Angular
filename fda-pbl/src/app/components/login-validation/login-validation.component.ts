import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-validation',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>Login Page Validation</h3>
    <input class="form-control my-2" [(ngModel)]="email" placeholder="Email" type="email">
    <input class="form-control my-2" [(ngModel)]="password" placeholder="Password" type="password">
    <button class="btn btn-primary" (click)="login()">Login</button>
  </div>
  `
})
export class LoginValidationComponent {
  email = '';
  password = '';
  login() {
    if(this.email && this.password) alert('Login Successful');
    else alert('Please enter all details.');
  }
}
