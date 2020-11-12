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
        border-radius: 4px;
        width: inherit;
        hight: inherit;
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
