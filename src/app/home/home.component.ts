import { Component, OnInit, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { faFile, faDollar, faChartLine, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  icon01 = faFile;
  icon02 = faDollar;
  icon03 = faChartLine;
  icon04 = faScrewdriverWrench;

  head: string = "PROPERTY MANAGEMENT SERVICES ELEVATED.";
  about1: string = "“Property Management” not only includes the basic operation, control and oversight of real estate assets but it also means: developing strategies and taking actions to maximize property values and investment returns.";
  about2: string = " This is what separates COZY Management from the rest; we are driven to find ways to reduce expenditures, expand revenue streams, harmonize tenant relations and take actions today that will create value tomorrow.";
  rent: string = "In order to help your tenants stay on top of rent payments, we send out monthly invoices (including a detailed breakdown of charges to their account) to remind them to payment is coming due.";
  rentcollec: string = "Tenants can pay their rent online, in real time, via electronic fund transfers or even pay by credit card. Through this technology, we can offer our owners up-to-date information on demand and in a clean detailed fashion.";
  expenses: string = "We pay all vendors on behalf of the property on time and such information is automatically compiled for owners to review at any time they desire. Our property managers adhere to strict standards of review when hiring & reviewing a vendor's work.";
  randm: string = "Outside of responsiveness and organization, we thoroughly screen all of the vendors we work with to ensure your property is getting the best possible repair and/or maintenance work for the best possible price.";

  changingTexts: string[] = [
    "PROFESSIONAL BOUTIQUE ASSET MANAGEMENT",
    "MAXIMIZING VALUE. MINIMIZING LIABILITY",
    "COMPETENCY. EXPERTISE"
  ];

  backgroundImages: string[] = [
    "../assets/interface01.jpg",
    "../assets/interface02.jpg",
    "../assets/interface03.jpg"
  ];
  backgroundImage02: string = "";
  currentIndex: number = 0;
  changingText: string = "";
  changingTextFadeOut: boolean = false;

  preloadedImages: HTMLImageElement[] = [];
  routerSubscription: Subscription | undefined;


  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    this.updateText();
    this.preloadAllImages();
    this.setupTextInterval();
    
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home' || event.url === '/') { 
          this.updateText();
          this.setupTextInterval();
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  setupTextInterval() {
    setInterval(() => {
      this.updateText();
    }, 5000);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateStyles();
  }

  preloadAllImages() {
    this.backgroundImages.forEach((imageUrl, index) => {
      const img = new Image();
      img.src = imageUrl;
      this.preloadedImages[index] = img;
    });
    this.updateStyles();
  }

  updateText() {
    this.changingTextFadeOut = true;
    setTimeout(() => {
      this.changingText = this.changingTexts[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.changingTexts.length;
      this.changingTextFadeOut = false;
      this.preloadNextImage();
    }, 500);
  }

  preloadNextImage() {
    const nextIndex = (this.currentIndex + 1) % this.backgroundImages.length;
    const img = new Image();
    img.onload = () => {
      this.preloadedImages[nextIndex] = img;
    };
    img.src = this.backgroundImages[nextIndex];
  }

  scrollDown() {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  updateStyles() {
    const screenWidth = window.innerWidth;

    const section = document.querySelector('.homepage04') as HTMLElement; 
    if (section) {
      if (screenWidth < 768) {
        this.backgroundImage02 = 'url(../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg)'; 
      } else {
        this.backgroundImage02 = 'none'; 
      }
    }
  }
}
