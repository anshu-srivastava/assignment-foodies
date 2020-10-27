import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

export class AppMocks {
  public static getThemeServiceMock = () => {
    return {
      isDarkTheme: jest.fn(() => false),
      setDarkTheme: jest.fn(() => {}),
      setLightTheme: jest.fn(() => {}),
      setActiveTheme: jest.fn(() => {}),
    };
  };

  public static getMockStoreService = () => {
    return {
      dispatch: (v) => jest.fn(() => {}),
      pipe: jest.fn(() => of({})),
      subscribe: jest.fn(() => of({})),
    };
  };

  public static getMockAuthService = () => {
    return {
      signIn: jest.fn(() => {}),
      register: jest.fn(() => {}),
      isLoggedIn: jest.fn(() => {}),
      logout: jest.fn(() => {}),
    };
  };

  public static getMockProductService = () => {
    return {
      addProductPopUp: jest.fn(() => {}),
      hideAddProductPopUp: jest.fn(() => {}),
      getProducts: jest.fn(() => {}),
      editProduct: jest.fn(() => {}),
    };
  };

  public static getMockFormGroup = () => {
    const myModel = {
      valid: true,
      value: null,
    };
    const fb = new FormBuilder();
    return fb.group(myModel);
  };
}



