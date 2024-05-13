import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginFailed: boolean = false; 
  
  constructor(private router: Router, private renderer: Renderer2) {}


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateStyles();
  }

  ngOnInit(): void {
    this.updateStyles();
  }

  login() {
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');

    if (storedEmail === this.email && storedPassword === this.password) {
      this.loginSuccess = true;
      this.loginFailed = false;
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
      this.loginSuccess = false;
    }
  }
  updateStyles() {
    const screenWidth = window.innerWidth;
    const element1 = document.querySelector('form');

    if (element1) {
      if (screenWidth >= 1800 && screenWidth <= 2560) {
        this.renderer.addClass(element1, 'signin-form-pad');
      } else {
        this.renderer.removeClass(element1, 'signup-form-pad');
      }
    }

    if (element1) {
      if (screenWidth >= 1800 && screenWidth <= 2560) {
        this.renderer.addClass(element1, 'form-pad-top');
      } else {
        this.renderer.removeClass(element1, 'form-pad-top');
      }
    }
  } 
}

