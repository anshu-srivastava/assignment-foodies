import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('lit-button')
export class CustomBtnElement extends LitElement {
  @property({ type: String })
  title;

  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .lit-btn {
        background-color: #1c5069;
        color: #ffffff;
        padding: 0.5em 1em;
        font-size: 1.25rem;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
        box-shadow: var(--background-tertiary-shadow);
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html`
      <button class="lit-btn">${this.title}</button>
    `;
  }
}
