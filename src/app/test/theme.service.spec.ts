import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { dark } from 'src/app/theme/theme';
import { ThemeService } from '../services/theme/theme.service';


describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(ThemeService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should be able to get active theme', () => {
    service.getActiveTheme();
  });

  test('should be able to get active theme', () => {
    service.getAvailableThemes();
  });

  test('should be able to check dark theme', () => {
    service.isDarkTheme();
  });

  test('should be able to set active theme', () => {
    const theme = dark;
    service.setActiveTheme(theme);
  });

  test('should be able to get dark theme', () => {
    service.setDarkTheme();
  });

  test('should be able to get dark theme', () => {
    service.setLightTheme();
  });
});
