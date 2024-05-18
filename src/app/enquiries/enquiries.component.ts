import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.css'
})
export class EnquiriesComponent implements OnInit {
  smallScreenImage = '../assets/Designer2.png';
  largeScreenImage = '../assets/Designer.png';
  currentImage: string = '';

  constructor() {}

  ngOnInit() {
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
