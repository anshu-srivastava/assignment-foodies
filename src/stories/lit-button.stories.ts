import { moduleMetadata } from '@storybook/angular';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule  } from '@angular/core';
import { CustomBtnElement } from 'src/app/lit-element/button-element';

export default {
  title: 'Example/lit-button',
  component: CustomBtnElement,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NgModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta;
