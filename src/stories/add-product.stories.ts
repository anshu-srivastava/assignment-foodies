import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductComponent } from 'src/app/components/dashboard/products/add-product/add-product.component';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as StorybookMocks from '../app/mocks/mocks';

export default {
  title: 'Example/add-product',
  component: AddProductComponent,
  decorators: [
    moduleMetadata({
      declarations: [AddProductComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Store, useValue: StorybookMocks }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta;

const Template: Story<AddProductComponent> = (args: AddProductComponent) => ({
  component: AddProductComponent,
  props: args,
});

export const addProduct = Template.bind({});
addProduct.args = {
  addProduct: StorybookMocks.AppMocks.mockCardActions().addProduct,
  cancel: StorybookMocks.AppMocks.mockProductActions().cancel,
};
