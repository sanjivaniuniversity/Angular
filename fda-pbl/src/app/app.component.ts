import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">FDA PBL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" *ngFor="let link of links">
          <a class="nav-link" [routerLink]="link.path">{{link.label}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container my-4">
  <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  links = [
    { path: 'login-validation', label: 'Login Validation' },
    { path: 'dark-mode', label: 'Dark Mode' },
    { path: 'char-counter', label: 'Char Counter' },
    { path: 'slideshow', label: 'Slideshow' },
    { path: 'order-form', label: 'Order Form' },
    { path: 'change-color', label: 'Change Color' },
    { path: 'registration', label: 'Registration' },
    { path: 'calculator', label: 'Calculator' },
    { path: 'simple-login', label: 'Simple Login' },
    { path: 'feedback', label: 'Feedback' }
  ];
}
