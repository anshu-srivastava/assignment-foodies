import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.authForm.controls;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.isSubmitted = true;
    if (!this.authForm.invalid) {
      this.authService.register(this.authForm.value);
      this.router.navigateByUrl('/dashboard');
    }
  }

  onEmailClick(event): void {
    this.authForm.controls.email.setValue(event);
  }

  onPasswordClick(event): void {
    this.authForm.controls.password.setValue(event);
  }

  onFirstNameClick(event): void {
    this.authForm.controls.firstName.setValue(event);
  }

  onLastNameClick(event): void {
    this.authForm.controls.lastName.setValue(event);
  }
}
