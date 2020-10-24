import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        FormBuilder,
      ],
      declarations: [LoginComponent],
      providers: [
        {
          provide: AuthService,
        },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });


  test('should exist', () => {
    const setAuthSpy = spyOn(component['authService'], 'logout');
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.onSubmit();
    expect(setAuthSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
