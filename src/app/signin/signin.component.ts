import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginFailed: boolean = false;
  showPassword: boolean = false;

  icon01 = faEyeSlash;
  icon02 = faEye;

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

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  updateStyles() {
    const screenWidth = window.innerWidth;
    const element1 = document.querySelector('form');

    if (element1) {
      if (screenWidth >= 1800 && screenWidth <= 2560) {
        this.renderer.addClass(element1, 'signin-form-pad');
      } else {
        this.renderer.removeClass(element1, 'signin-form-pad');
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
