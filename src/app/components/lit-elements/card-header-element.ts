import { LitElement, html, customElement, css } from 'lit-element';

@customElement('foodie-card-header')
export class CustomCardHeaderElement extends LitElement {
  constructor() {
    super();
  }
  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .card-header {
        font-size: 1.5rem;
        font-weight: 600;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <div class="card-header">
      <slot></slot>
    </div>`;
  }
}
