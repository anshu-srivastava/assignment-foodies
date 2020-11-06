import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/angular/types-6-0';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Store, StoreModule } from '@ngrx/store';
import * as StorybookMocks from '../app/appMocks/appMocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { object, withKnobs } from '@storybook/addon-knobs';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {
  addProductFormView: {},
  selectedProduct: {},
  dispatch: () => {},
  pipe: () => {},
};

export default {
  title: 'Example/dashboard',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      providers: [
        { provide: Store, useValue: StorybookMocks },
        provideMockStore({ initialState }),
      ],
      imports: [
        CommonModule,
        StoreModule,
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    withKnobs,
  ],
} as Meta;

const productData = {
  id: '1',
  heading: 'Pasta',
  description:
    'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking',
  imageUrl:
    'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
};

export const viewProduct = () => ({
         component: DashboardComponent,
         props: {
           product: object('product', { ...productData }),
           editProduct: StorybookMocks.AppMocks.mockCardActions().updateProduct,
           name: { touched: false, invalid: false },
           price: { touched: false, invalid: false },
           imageUrlPreview: '',
           productOperationInfo: {
             productOperation: 'Add',
             disableFormFields: false,
           },
         },
       });

