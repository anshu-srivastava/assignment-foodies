import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMocks } from 'src/app/appMocks/appMocks';
import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

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
        TranslateModule.forRoot(),
      ],
      declarations: [LoginComponent],
      providers: [TranslateService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
