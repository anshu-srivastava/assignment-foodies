import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppMocks } from 'src/app/appMocks/appMocks';
import { AddProductComponent } from 'src/app/components/dashboard/products/add-product/add-product.component';


describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
      providers: [
        TranslateService,
        { provide: Store, useValue: AppMocks.getMockStoreService() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
