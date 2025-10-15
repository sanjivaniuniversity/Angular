import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  template: `
  <div [class.bg-dark]="isDark" [class.text-light]="isDark" class="p-4 card">
    <h3>Dark Mode Toggle</h3>
    <p>Toggle the theme below.</p>
    <button class="btn btn-secondary" (click)="toggle()">Toggle Theme</button>
  </div>
  `
})
export class DarkModeComponent {
  isDark = false;
  toggle(){ this.isDark = !this.isDark; }
}
