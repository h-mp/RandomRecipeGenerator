/**
 * The Custom Button web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { customButtonTemplate } from './customButtonTemplate.js'

customElements.define("custom-button", 
  class Button extends HTMLElement {

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(customButtonTemplate.content.cloneNode(true))
    }

    set action(value) {
      this.setAttribute('action', value);
    }
    
    get action() {
      return this.getAttribute('action');
    }

    connectedCallback () {
      const btn = this.shadowRoot.querySelector('.btn');
      const spanText = this.shadowRoot.querySelector('.spanText');

      spanText.textContent = this.action;

      btn.addEventListener('click', () => {
        this.dispatchEvent(new Event(`button-click-${this.action}`, { bubbles: true }))
      })
    }
  }
)