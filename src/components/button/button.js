import { buttonTemplate } from "./buttonTemplate"

export class Button extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true))
  }

  connectedCallback () {
    this.shadowRoot.querySelector('.btn').addEventListener('click', () => {
      this.dispatchEvent(new Event('button-click', { bubbles: true }))
    })
  }
}