import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to add product', () => {
    const value = true;
    component.addProductPopUp(value);
  });

  test('should be able to get product', () => {
    component.getProducts();
  });

  test('should be able to get product', () => {
    const value = true;
    component.hideAddProductPopUp(value);
  });

  test('should be able to get product', () => {
    const id = null;
    component.editProduct(id);
  });
});
