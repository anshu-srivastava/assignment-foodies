import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.authForm.controls;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.isSubmitted = true;
    if (this.authForm.invalid){
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/dashboard');

    /* this.httpService
      .postLogin(environment.login, this.authForm.value)
      .subscribe((data) => {
        console.log(data);
        sessionStorage.setItem('token', data.access_token);
        this.router.navigateByUrl('/dashboard');
      }); */
  }
}
