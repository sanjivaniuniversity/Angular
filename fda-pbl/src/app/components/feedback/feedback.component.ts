import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>Feedback Form</h3>
    <input class="form-control my-2" [(ngModel)]="name" placeholder="Name">
    <input class="form-control my-2" [(ngModel)]="email" placeholder="Email" type="email">
    <select class="form-control my-2" [(ngModel)]="rating">
      <option value="">Rate (1-5)</option>
      <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
    </select>
    <textarea class="form-control my-2" rows="3" [(ngModel)]="comment" placeholder="Comments"></textarea>
    <button class="btn btn-success" (click)="submit()">Submit</button>
  </div>
  `
})
export class FeedbackComponent {
  name=''; email=''; rating=''; comment='';
  submit(){ if(this.name && this.email && this.rating && this.comment) alert('Thank you for your feedback!'); else alert('Please fill all fields.'); }
}
