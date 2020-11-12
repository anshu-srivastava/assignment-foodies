import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMocks } from 'src/app/appMocks/appMocks';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EditProductsComponent } from 'src/app/components/dashboard/products/edit-products/edit-products.component';

describe('EditProductsComponent', () => {
  let component: EditProductsComponent;
  let fixture: ComponentFixture<EditProductsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [EditProductsComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        TranslateService,
        { provide: Store, useValue: AppMocks.getMockStoreService() }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(EditProductsComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to edit product', () => {
    const updateProductSpy = spyOn(component['store'], 'dispatch');
    component.editProduct();
    expect(updateProductSpy).toHaveBeenCalled();
  });

  test('should be able to close popup', () => {
    const cancelSpy = spyOn(component['store'], 'dispatch');
    component.Cancel();
    expect(cancelSpy).toHaveBeenCalled();
  });
});
