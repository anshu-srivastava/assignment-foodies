import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMocks } from 'src/app/mocks/appMocks';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [RegisterComponent]
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
});
