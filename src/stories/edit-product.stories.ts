import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EditProductsComponent } from 'src/app/components/dashboard/products/edit-products/edit-products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as StorybookMocks from '../app/mocks/mocks';

export default {
  title: 'Example/edit-product',
  component: EditProductsComponent,
  decorators: [
    moduleMetadata({
      declarations: [EditProductsComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Store, useValue: StorybookMocks }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta;

const Template: Story<EditProductsComponent> = (args: EditProductsComponent) => ({
  component: EditProductsComponent,
  props: args,
});

export const editProduct = Template.bind({});
editProduct.args = {
  editProduct: StorybookMocks.AppMocks.mockCardActions().updateProduct,
  cancel: StorybookMocks.AppMocks.mockProductActions().cancel,
};
