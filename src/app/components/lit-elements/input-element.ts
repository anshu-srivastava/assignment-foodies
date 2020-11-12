import { LitElement, html, customElement, property, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('foodie-input')
export class CustomInputElement extends LitElement {
  type: string;
  value: string;
  disabled: boolean;
  outline: boolean;
  inputValue: string;
  label: string;

  constructor() {
    super();
    // initialize the properties
    this.type = '';
    this.value = '';
    this.disabled = false;
    this.outline = false;
    this.inputValue = '';
    this.label = '';
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
      input.outline {
        border: 2px solid rgba(128, 128, 128, 0.64);
        border-radius: 5px;
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
      input {
        font-size: 1.3rem;
        outline: none;
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
      input:focus {
        border: 3px solid blue;
      }
      input:focus + label {
        color: #b949d5;
        top: 0;
        transform: translateY(-50%) scale(0.9);
      }
      input:not(:placeholder-shown) + label {
        top: 0;
        transform: translateY(-50%) scale(0.9);
        border-radius: 2px;
      }
      input:focus:not(.outline) ~ label,
      input:not(:placeholder-shown):not(.outline) ~ label {
        padding-left: 0px;
      }
      input:disabled,
      input:disabled ~ .label {
        opacity: 0.5;
      }
    `;
  }

  // tslint:disable-next-line: typedef
  render() {
    return html`
      <div class="form-group">
        <input
          class=${classMap({
            outline: this.outline,
          })}
          type="${this.type}"
          .value="${this.inputValue}"
          @input="${this.inputHandler}"
          ?disabled="${this.disabled}"
        />
        <label>${this.label}</label>
        <slot></slot>
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
      type: { type: String },
      value: { type: String },
      outline: { type: Boolean },
      disabled: { type: Boolean },
      inputValue: { type: String },
      label: {type: String}
    };
  }
}
