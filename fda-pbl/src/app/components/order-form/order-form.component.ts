import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4">
    <h3>Online Order Form</h3>
    <input class="form-control my-2" [(ngModel)]="name" placeholder="Name">
    <input class="form-control my-2" [(ngModel)]="item" placeholder="Item">
    <input class="form-control my-2" type="number" [(ngModel)]="qty" placeholder="Quantity">
    <button class="btn btn-success" (click)="place()">Place Order</button>
    <p class="mt-2" *ngIf="summary">{{summary}}</p>
  </div>
  `
})
export class OrderFormComponent {
  name=''; item=''; qty:number|null=null; summary='';
  place(){
    if(this.name && this.item && this.qty) this.summary = `${this.name} ordered ${this.qty} x ${this.item}.`;
    else alert('Please fill all fields.');
  }
}
