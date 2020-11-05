import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppMocks } from 'src/app/mocks/appMocks';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: Store, useValue: AppMocks.getMockStoreService() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to delete product', () => {
    const deleteProductSpy = spyOn(component['store'], 'dispatch');
    const id = null;
    component.deleteProduct(id);
    expect(deleteProductSpy).toHaveBeenCalled();
   });
  test('should be able to delete', () => {
    const editSpy = spyOn(component['store'], 'dispatch');
    const id = null;
    component.edit(id);
    expect(editSpy).toHaveBeenCalled();
  });
});
