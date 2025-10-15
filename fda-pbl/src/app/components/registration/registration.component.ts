import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>College Event Registration</h3>
    <input class="form-control my-2" [(ngModel)]="name" placeholder="Name">
    <input class="form-control my-2" [(ngModel)]="email" placeholder="Email">
    <select class="form-control my-2" [(ngModel)]="gender">
      <option value="">Select Gender</option>
      <option>Male</option><option>Female</option><option>Other</option>
    </select>
    <input class="form-control my-2" [(ngModel)]="dept" placeholder="Department">
    <button class="btn btn-primary" (click)="register()">Register</button>
  </div>
  `
})
export class RegistrationComponent {
  name=''; email=''; gender=''; dept='';
  register(){ if(this.name && this.email && this.gender && this.dept) alert('Registered Successfully!'); else alert('Please fill all fields.'); }
}
