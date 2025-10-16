/**
 * The Custom Button web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { customButtonTemplate } from './customButtonTemplate.js'

customElements.define("custom-button", 
  class CustomButton extends HTMLElement {
    /**
     * The action name for the button-click event detail.
     */
    #action

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(customButtonTemplate.content.cloneNode(true))
    }

    connectedCallback () {
      this.#setButtonEventListener()
    }

    /**
     * Returns the action field.
     * 
     * @returns {string} The action name.
     */
    get action () {
      return this.#action
    }

    /**
     * Sets the action field.
     *
     * @param {string} value - The action value.
     */
    set action (value) {
      this.#action = value
    }

    /**
     * Sets the event listener for the button click event.
     */
    #setButtonEventListener () {
      const btn = this.shadowRoot.querySelector('.btn');

      btn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('button-click', {
          detail: { action: this.#action },
          bubbles: true,
          composed: true
        }))
      })
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