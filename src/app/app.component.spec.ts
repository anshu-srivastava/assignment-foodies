import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app-root'`, () => {
    expect(component.title).toEqual('app-root');
  });
});
