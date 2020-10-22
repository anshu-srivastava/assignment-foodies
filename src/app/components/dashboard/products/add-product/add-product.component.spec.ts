import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductComponent ]
    });

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
