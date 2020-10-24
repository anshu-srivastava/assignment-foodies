import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppMocks } from 'src/app/mocks/mocks';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      providers: [{ provide: Store, useValue: AppMocks.getMockStoreService() }],
    });

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to close popup', () => {
    component.addProduct();
  });
  test('should be able to close popup', () => {
    component.Cancel();
  });
});
