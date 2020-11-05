import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { AppMocks } from 'src/app/mocks/appMocks';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [
        AuthService,
        {
          provide: ThemeService,
          useValue: AppMocks.getThemeServiceMock(),
        },
        {
          provide: Store,
          useValue: AppMocks.getMockStoreService()
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be able to set theme', () => {
    component.setTheme();
  });

  test('should be able to change theme', () => {
    const isDarkThemeSpy = spyOn(component['themeService'], 'isDarkTheme');
    const setDarkThemeSpy = spyOn(component['themeService'], 'setDarkTheme');
    const setLightThemeSpy = spyOn(component['themeService'], 'setLightTheme');
    // dark theme
    component.changeTheme();
    expect(isDarkThemeSpy).toHaveBeenCalled();
    expect(setDarkThemeSpy).toHaveBeenCalled();
    // light theme
    isDarkThemeSpy.and.returnValue(true);
    component.changeTheme();
    expect(setLightThemeSpy).toHaveBeenCalled();
  });

  test('should be able to add product', () => {
    const productSpy = spyOn(component['store'], 'dispatch');
    component.addProduct();
    expect(productSpy).toHaveBeenCalled();
  });


  test('should be able to logout user', () => {

    const setAuthSpy = spyOn(component['authService'], 'logout');
    const navigateSpy = spyOn(component['router'], 'navigateByUrl');
    component.logout();
    expect(setAuthSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
