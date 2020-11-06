import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule  } from '@angular/core';
import { CustomBtnElement } from 'src/app/lit-element/button-element';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-element';

export default {
  title: 'Example/lit-button',
  component: CustomBtnElement,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NgModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    withKnobs,
  ],
} as Meta;

export const FoodieButton = () =>
  html`
    <foodie-button>
      ${text('Label', 'foodie button')}
    </foodie-button>
  `;

