import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { EditProductsComponent } from 'src/app/components/dashboard/products/edit-products/edit-products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as StorybookMocks from '../app/appMocks/appMocks';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { withKnobs } from '@storybook/addon-knobs';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {
  getProductById: {},
  selectedProduct: null,
  dispatch: () => {},
  pipe: () => {},
};

export default {
  title: 'Example/edit-product',
  component: EditProductsComponent,
  decorators: [
    moduleMetadata({
      declarations: [EditProductsComponent],
      imports: [
        CommonModule,
        StoreModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
          defaultLanguage: 'en',
        }),
      ],
      providers: [
        provideMockStore({ initialState })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    withKnobs,
  ],
} as Meta;

export const updateProduct = () => ({
  component: EditProductsComponent,
  props: {
    productForm: StorybookMocks.AppMocks.mockCardActions().updateProduct,
    heading: { touched: false, invalid: false },
    description: { touched: false, invalid: false },
    imageUrlPreview:
      'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
    productOperationInfo: {
      productOperation: 'Update',
      disableFormFields: false,
    },
    buttonText: 'update-button',
    cancel: StorybookMocks.AppMocks.mockProductActions().cancel,
  },
});
