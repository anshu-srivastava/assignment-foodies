import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Store } from '@ngrx/store';
import * as StorybookMocks from '../app/mocks/mocks';

export default {
  title: 'Example/dashboard',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      providers: [{ provide: Store, useValue: StorybookMocks }],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
  component: DashboardComponent,
  props: args,
});

export const getProduct = Template.bind({});
getProduct.args = {
  getProducts: StorybookMocks.AppMocks.mockCardActions().getProducts,
  editProduct: StorybookMocks.AppMocks.mockCardActions().updateProduct,
};
