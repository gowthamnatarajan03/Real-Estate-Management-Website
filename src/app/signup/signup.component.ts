import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  formSubmitted: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  icon01 = faEyeSlash;
  icon02 = faEye;

  constructor(private formBuilder: FormBuilder, private router: Router, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateStyles();
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });

    this.signupForm.get('password')?.valueChanges.subscribe(() => {
      this.signupForm.get('confirmPassword')?.updateValueAndValidity();
    });

    this.updateStyles();
  }

  passwordValidator(control: AbstractControl) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(control.value);
    if (!isValid) {
      return { invalidPassword: true };
    }
    return null;
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.signupForm.valid) {
      sessionStorage.setItem('email', this.signupForm.value.email);
      sessionStorage.setItem('password', this.signupForm.value.password);
      this.router.navigate(['/signin']);
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  updateStyles() {
    const screenWidth = window.innerWidth;
    const element1 = document.querySelector('form');

    if (element1) {
      if (screenWidth >= 1800 && screenWidth <= 2560) {
        this.renderer.addClass(element1, 'signup-form-pad');
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
