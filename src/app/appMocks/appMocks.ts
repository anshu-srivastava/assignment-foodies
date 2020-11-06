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
  }

  public static getMockStoreService = () => {
    return {
      dispatch: (v) => jest.fn(() => {}),
      pipe: jest.fn(() => of({})),
      subscribe: jest.fn(() => of({})),
    };
  }

  public static getMockAuthService = () => {
    return {
      signIn: jest.fn(() => {}),
      register: jest.fn(() => {}),
      isLoggedIn: jest.fn(() => {}),
      logout: jest.fn(() => {}),
    };
  }

  public static getMockProductService = () => {
    return {
      addProductPopUp: jest.fn(() => {}),
      hideAddProductPopUp: jest.fn(() => {}),
      getProducts: jest.fn(() => {}),
      editProduct: jest.fn(() => {}),
    };
  }

  public static getMockFormGroup = () => {
    const myModel = {
      valid: true,
      value: null,
    };
    const fb = new FormBuilder();
    return fb.group(myModel);
  }

  public static mockCardActions = () => {
    return {
      updateProduct: (event) => {event.stopPropagation(); console.log('updateProduct called'); },
      deleteProduct: (event) => { event.stopPropagation(); console.log('deleteProduct called'); },
      addProduct: (event) => {event.stopPropagation(); console.log('addProduct called'); },
      getProducts: (event) => {event.stopPropagation(); console.log('getProduct called'); }
    };
  }

   public static mockHeaderActions = () => {
    return {
      addProduct: () => { console.log('addProduct called'); },
      logout: () => {console.log('logout called'); },
      changeLanguage: () => { console.log('changeLanguage called'); },
      changeTheme: () => { console.log('changeTheme called'); }
    };
  }

  public static mockProductActions = () => {
    return {
      cancel: () => {console.log('cancel called'); },
      onSubmit: () => {console.log('onSubmit called'); }
    };
  }

  public static getrouterMock = () => {
    return {
      navigate: () => {},
    };
  }
}



