import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  template: `
  <div class="card p-4 text-center">
    <h3>Image Slideshow</h3>
    <img [src]="images[index]" class="img-fluid rounded mb-2" style="max-height:300px;object-fit:cover;">
    <div>
      <button class="btn btn-outline-primary me-2" (click)="prev()">Previous</button>
      <button class="btn btn-outline-primary" (click)="next()">Next</button>
    </div>
  </div>
  `
})
export class SlideshowComponent {
  images = [
    'https://picsum.photos/800/300?random=1',
    'https://picsum.photos/800/300?random=2',
    'https://picsum.photos/800/300?random=3'
  ];
  index = 0;
  constructor(){ setInterval(()=>this.next(),3000); }
  next(){ this.index = (this.index + 1) % this.images.length; }
  prev(){ this.index = (this.index - 1 + this.images.length) % this.images.length; }
}
