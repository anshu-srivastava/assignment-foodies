import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMocks } from 'src/app/mocks/mocks';

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
      ],
      declarations: [LoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('should validate form', () => {
    component.ngOnInit();
  });

  test('should exist', () => {
    const mockFormGroup = AppMocks.getMockFormGroup();
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.authForm = mockFormGroup;
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
