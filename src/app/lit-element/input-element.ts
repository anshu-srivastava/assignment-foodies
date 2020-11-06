import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('foodie-input')
export class CustomInputElement extends LitElement {
  @property({ type: String })
  type;

  @property({ type: String })
  placeholder;

  @property({ type: String })
  formControlName;

  @property({ type: String })
  ariaLabel;

  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .lit-input {
        background: var(--foreground-default);
        color: var(--primary-light);
        border: 2px solid #808080a3;
        padding: 0.2em 0.5em;
        font-size: 1.25rem;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: var(--background-tertiary-shadow);
      }
      .lit-input:hover {
        border: 2px solid blue;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <input
      type="${this.type}"
      placeholder="${this.placeholder}"
      formControlName="${this.formControlName}"
      aria-label="${this.ariaLabel}"
      class="lit-input"
    />`;
  }
}
