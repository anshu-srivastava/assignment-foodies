import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store } from '@ngrx/store';
import { CardComponent } from 'src/app/components/dashboard/products/card/card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as StorybookMocks from '../app/appMocks/appMocks';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

export default {
  title: 'Example/card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [
        CommonModule,
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
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    component: CardComponent,
    props: args,
});

export const newItemEvent = Template.bind({});
newItemEvent.args = {};

export const newItemEventId = Template.bind({});
newItemEventId.args = {};

export const card = Template.bind({});
card.args = {
  product: {
    id: '1',
    heading: 'Pasta',
    description:
      'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking',
    imageUrl:
      'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
  },
  editProduct: StorybookMocks.AppMocks.mockCardActions().updateProduct,
  deleteProduct: StorybookMocks.AppMocks.mockCardActions().deleteProduct,
};

