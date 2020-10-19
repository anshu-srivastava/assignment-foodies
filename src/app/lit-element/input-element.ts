import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('lit-input')
export class CustomInputElement extends LitElement {
  @property({ type: String })
  placeholder;
  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      .lit-element {
        background: #ffffff;
        padding: 1em;
        border-color: #bbb;
        border-radius: 4px;
        cursor: pointer;
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        outline: 0;
        font-family: inherit;
        font-size: 0.95em;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html` <input class="lit-element /> `;
  }
}
