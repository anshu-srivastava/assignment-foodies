import { LitElement, html, customElement, css } from 'lit-element';

@customElement('foodie-card-footer')
export class CustomCardFooterElement extends LitElement {
  constructor() {
    super();
  }
  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .card-footer {
        border: 2px solid #808080a3;
        border-radius: 4px;
        width: inherit;
        hight: inherit;
      }
      .card-footer:hover {
        border: 2px solid blue;;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <div class="card-footer">
      <slot></slot>
    </div>`;
  }
}
