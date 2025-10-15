import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="card p-4 text-center">
    <h3>Basic Calculator</h3>
    <input class="form-control d-inline-block w-25 me-2" [(ngModel)]="a" type="number" placeholder="A">
    <input class="form-control d-inline-block w-25" [(ngModel)]="b" type="number" placeholder="B">
    <div class="mt-3">
      <button class="btn btn-outline-primary me-2" (click)="calc('add')">Add</button>
      <button class="btn btn-outline-primary me-2" (click)="calc('sub')">Subtract</button>
      <button class="btn btn-outline-primary me-2" (click)="calc('mul')">Multiply</button>
      <button class="btn btn-outline-primary" (click)="calc('div')">Divide</button>
    </div>
    <p class="mt-3">Result: {{result}}</p>
  </div>
  `
})
export class CalculatorComponent {
  a:number|null=null; b:number|null=null; result:any='';
  calc(op:string){
    if(this.a==null || this.b==null){ this.result='Error'; return; }
    if(op==='add') this.result = this.a + this.b;
    else if(op==='sub') this.result = this.a - this.b;
    else if(op==='mul') this.result = this.a * this.b;
    else if(op==='div') this.result = this.b !== 0 ? this.a / this.b : 'Error';
  }
}
