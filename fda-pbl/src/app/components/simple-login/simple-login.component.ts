import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-login',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>Simple Login Page</h3>
    <input class="form-control my-2" [(ngModel)]="user" placeholder="Username">
    <input class="form-control my-2" [(ngModel)]="pass" placeholder="Password" type="password">
    <button class="btn btn-primary" (click)="login()">Login</button>
    <p class="mt-2">{{msg}}</p>
  </div>
  `
})
export class SimpleLoginComponent {
  user=''; pass=''; msg='';
  login(){ if(this.user==='admin' && this.pass==='1234') this.msg='Welcome, admin!'; else this.msg='Invalid Credentials.'; }
}
