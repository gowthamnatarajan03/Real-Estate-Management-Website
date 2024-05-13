import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cozy-real-estate-management';
  navbarColor: string = 'transparent';
  isMobileView: boolean = false;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 0) {
      this.navbarColor = 'black';
    } else {
      this.navbarColor = 'transparent';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth < 768;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.navbarColor = 'rgba(0, 0, 0, 0.7)';
    } else {
      this.navbarColor = window.pageYOffset > 0 ? 'rgba(0, 0, 0, 0.7)' : 'transparent';
    }
  }
  
}
