import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMocks } from 'src/app/appMocks/appMocks';

import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot(),
      ],
      declarations: [RegisterComponent],
      providers: [TranslateService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeDefined();
  });

  test('should exist', () => {
    const mockFormGroup = AppMocks.getMockFormGroup();
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.authForm = mockFormGroup;
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalled();
  });

  test('should bind Email value', () => {
    const emailEvent = '';
    component.onEmailClick(emailEvent);
  });
});
