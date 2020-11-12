import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('foodie-button')
export class CustomBtnElement extends LitElement {
  @property({ type: String })
  title;

  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .btn {
        background: var(--foreground-default);
        color: var(--primary-light);
        border: 2px solid #808080a3;
        padding: 0.2em 0.5em;
        font-size: 1.25rem;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: var(--background-tertiary-shadow);
      }
      .btn:hover {
        border: 2px solid blue;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <button class="btn">${this.title}</button> `;
  }
}
