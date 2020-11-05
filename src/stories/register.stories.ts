import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RegisterComponent } from 'src/app/components/register/register.component';

export default {
  title: 'Example/register',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
  component: RegisterComponent,
  props: args,
});

