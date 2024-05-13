import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent {
  smallScreenImage = '../assets/Designer2.png';
  largeScreenImage = '../assets/Designer.png';
  currentImage: string;

  constructor() {
    this.currentImage = '';
    this.setCurrentImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setCurrentImage();
  }

  setCurrentImage() {
    if (window.innerWidth <= 576) {
      this.currentImage = this.smallScreenImage;
    } else {
      this.currentImage = this.largeScreenImage;
    }
  }
}
