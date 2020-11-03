import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppMocks } from 'src/app/mocks/appMocks';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Store, useValue: AppMocks.getMockStoreService() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  }));


  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to add product', () => {
    const value = true;
    component.addProductPopUp(value);
  });

  test('should be able to get product', () => {
    const productSpy = spyOn(component['store'], 'dispatch');
    component.getProducts();
    expect(productSpy).toHaveBeenCalled();
  });

  test('should hide popup', () => {
    const value = true;
    component.hideAddProductPopUp(value);
  });

  test('should edit product', () => {
    const id = null;
    component.editProduct(id);
  });
});
