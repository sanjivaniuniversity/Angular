import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  standalone: true,
  template: `
  <div class="card p-4 text-center">
    <h3>Change Background Color</h3>
    <button class="btn btn-warning" (click)="change()">Change Color</button>
    <div class="mt-3" [style.background]="color" style="height:150px;border-radius:6px"></div>
  </div>
  `
})
export class ChangeColorComponent {
  color = '#ffffff';
  change(){ this.color = '#'+Math.floor(Math.random()*16777215).toString(16); }
}
