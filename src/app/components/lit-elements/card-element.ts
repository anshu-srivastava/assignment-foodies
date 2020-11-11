import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('foodie-card')
export class CustomCardElement extends LitElement {
  constructor() {
    super();
  }
  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .card {
        border: 2px solid #808080a3;
        border-radius: 4px;
        width: inherit;
        hight: inherit;
        cursor: pointer;
      }
      .card:hover {
        border: 2px solid blue;;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html`
    <div class="card">
      <slot></slot>
    </div>`;
  }
}
