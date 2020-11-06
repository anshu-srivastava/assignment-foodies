import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductComponent } from 'src/app/components/dashboard/products/add-product/add-product.component';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as StorybookMocks from '../app/appMocks/appMocks';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Example/add-product',
  component: AddProductComponent,
  decorators: [
    moduleMetadata({
      declarations: [AddProductComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
          defaultLanguage: 'en',
        }),
      ],
      providers: [{ provide: Store, useValue: StorybookMocks }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    withKnobs,
  ],
} as Meta;

export const addProduct = () => ({
  component: AddProductComponent,
  props: {
    addProduct: StorybookMocks.AppMocks.mockCardActions().addProduct,
    name: { touched: false, invalid: false },
    price: { touched: false, invalid: false },
    imageUrlPreview: '',
    productOperationInfo: {
      productOperation: 'Add',
      disableFormFields: false,
    },
    buttonText: 'add-button',
    cancel: StorybookMocks.AppMocks.mockProductActions().cancel,
  },
});

