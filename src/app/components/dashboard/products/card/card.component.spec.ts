import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppMocks } from 'src/app/mocks/mocks';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: Store, useValue: AppMocks.getMockStoreService() }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to loggedIn', () => {
    const cardSpy = spyOn(component['store'], 'dispatch');
    const id = null;
    component.deleteProduct(id);
    expect(cardSpy).toHaveBeenCalled();
   });
  test('should be able to delete', () => {
    const cardSpy = spyOn(component['store'], 'dispatch');
    const id = null;
    component.edit(id);
    expect(cardSpy).toHaveBeenCalled();
  });
});
