import { LitElement, html, customElement, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('foodie-textarea')
export class CustomTextareaElement extends LitElement {
  value: string;
  outline: boolean;
  inputValue: string;
  label: string;
  rows: string;
  cols: string;

  constructor() {
    super();
    // initialize the properties
    this.value = '';
    this.outline = false;
    this.inputValue = '';
    this.label = '';
    this.rows = '';
    this.cols = '';
  }
  // tslint:disable-next-line: typedef
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      .form-group {
        position: relative;
        margin: 1rem 0;
      }
      textarea.outline {
        border: 2px solid rgba(128, 128, 128, 0.64);
        border-radius: 5px;
        min-height: 80px;
        width: -webkit-fill-available;
      }
      label {
        position: absolute;
        font-size: 1rem;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        color: gray;
        padding: 0 0.3rem;
        margin: 0 0.5rem;
        transition: 0.1s ease-out;
        transform-origin: left top;
        pointer-events: none;
      }
      textarea {
        font-size: 1.5rem;
        outline: none;
        width: -webkit-fill-available;
        border: none;
        border-radius: 0px;
        padding: 1rem 0.6rem;
        color: #333333;
        transition: 0.1s ease-out;
        border-bottom: 1px solid #333333;
        background: transparent;
        cursor: text;
        margin-left: auto;
        width: 95%;
        margin-right: auto;
      }
      textarea:focus {
        border: 3px solid blue;
      }
      textarea:focus + label {
        color: #b949d5;
        top: 0;
        transform: translateY(-50%) scale(0.9);
      }
      textarea:not(:placeholder-shown) + label {
        top: 0;
        transform: translateY(-50%) scale(0.9);
        border-radius: 2px;
      }
      textarea:focus:not(.outline) ~ label,
      textarea:not(:placeholder-shown):not(.outline) ~ label {
        padding-left: 0px;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html`
      <div class="form-group">
        <textarea
          class=${classMap({
            outline: this.outline,
          })}
          row="${this.rows}"
          cols="${this.cols}"
          .value="${this.inputValue}"
          @input="${this.inputHandler}"
        >
          <slot></slot>
        </textarea
        >
        <label>${this.label}</label>
      </div>
    `;
  }

  inputHandler(event): void {
    this.dispatchEvent(
      new CustomEvent('val-change', {
        detail: { value: event.composedPath()[0].value },
      })
    );
  }

  // tslint:disable-next-line: typedef
  static get properties() {
    return {
      value: { type: String },
      outline: { type: Boolean },
      inputValue: { type: String },
      rows: { type: String },
      cols: { type: String },
      label: { type: String },
    };
  }
}
