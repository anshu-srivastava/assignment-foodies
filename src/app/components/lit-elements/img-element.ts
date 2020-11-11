import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('foodie-img')
export class CustomImgElement extends LitElement {
  @property({ type: String })
  src;

  @property({ type: String })
  alt;

  constructor() {
    super();
  }

  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .card-img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        border-radius: 4px 4px 0 0;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <img class="card-img" src="${this.src}" alt="${this.alt}" /> `;
  }
}
