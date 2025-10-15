import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-char-counter',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>Character Counter</h3>
    <textarea class="form-control" [(ngModel)]="text" maxlength="100" (input)="update()"></textarea>
    <p class="mt-2">Characters typed: {{count}} / 100</p>
  </div>
  `
})
export class CharCounterComponent {
  text = '';
  count = 0;
  update(){ this.count = this.text.length; }
}
