/**
 * The Custom Button web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { customButtonTemplate } from './customButtonTemplate.js'

customElements.define("custom-button", 
  class CustomButton extends HTMLElement {
    #buttonClickAction

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(customButtonTemplate.content.cloneNode(true))
    }

    get action () {
      return this.#buttonClickAction
    }

    set action (value) {
      this.#buttonClickAction = value
    }

    connectedCallback () {
      this.#setEventListener()
    }

    #setEventListener () {
      const btn = this.shadowRoot.querySelector('.btn');

      btn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('button-click', {
          detail: { action: this.#buttonClickAction },
          bubbles: true,
          composed: true
        }))
      })
    }

    setButtonText (text) {
      const spanElement = this.shadowRoot.querySelector('.spanText')
      spanElement.textContent = text
    }
  }
)