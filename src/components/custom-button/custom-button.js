/**
 * The Custom Button web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { customButtonTemplate } from './customButtonTemplate.js'

customElements.define("custom-button", 
  class CustomButton extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(customButtonTemplate.content.cloneNode(true))
    }

    connectedCallback () {
      const btn = this.shadowRoot.querySelector('.btn');

      btn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent(`button-click`, {
          detail: { action: this.action },
          bubbles: true 
        }))
      })
    }

    /**
     * Sets the action attribute of the button.
     *
     * @param {string} value - The action value.
     */
    set action (value) {
      this.setAttribute('action', value)
    }

    /**
     * Sets the text displayed on the button.
     *
     * @param {string} value - The text to display on the button.
     */
    setButtonText (value) {
      const spanElement = this.shadowRoot.querySelector('.spanText')
      spanElement.textContent = value
    }
  }
)