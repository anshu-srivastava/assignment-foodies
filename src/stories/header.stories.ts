import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import * as StorybookMocks from '../app/appMocks/appMocks';
import { Router } from '@angular/router';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Example/header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
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
      providers: [
        { provide: Store, useValue: StorybookMocks },
        { provide: Router, useValue: StorybookMocks },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }),
    withKnobs,
  ],
  argTypes: {
    // creates a specific argType based on the iconMap object
    isAuthenticated: {
      control: {
        type: 'boolean',
        options: { isAuthenticated: true },
      },
    },
  },
} as Meta;

export const LoggedIn = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => true,
    addProduct: StorybookMocks.AppMocks.mockHeaderActions().addProduct,
    logout: StorybookMocks.AppMocks.mockHeaderActions().logout,
    changeLanguage: StorybookMocks.AppMocks.mockHeaderActions().changeLanguage,
    changeTheme: StorybookMocks.AppMocks.mockHeaderActions().changeTheme,
  },
  args: {},
});

export const LoggedOut = () => ({
  component: HeaderComponent,
  props: {
    isAuthenticated: () => false,
    addProduct: StorybookMocks.AppMocks.mockHeaderActions().addProduct,
    logout: StorybookMocks.AppMocks.mockHeaderActions().logout,
    changeLanguage: StorybookMocks.AppMocks.mockHeaderActions()
      .changeLanguage,
    changeTheme: StorybookMocks.AppMocks.mockHeaderActions().changeTheme,
  },
});

