/**
 * The Recipe Card web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import {recipeCardTemplate} from './recipeCardTemplate.js'
import '../custom-button/custom-button.js'
import { RecipeConverter } from '../recipeConverter/recipeConverter.js'

customElements.define("recipe-card",
  class RecipeCard extends HTMLElement {
    /**
     * The recipe data object.
     */
    #recipe

    /**
     * RecipeConverter instance for converting ingredient amounts.
     */
    #recipeConverter

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(recipeCardTemplate.content.cloneNode(true))

      this.#recipeConverter = new RecipeConverter()
    }

    connectedCallback () {
      const customButton = document.createElement('custom-button')
      customButton.action = 'convert-values'
      this.shadowRoot.querySelector('.customButtonContainer')
      .appendChild(customButton)

      customButton.addEventListener('button-click', e => {
        if (e.detail.action === 'convert-values') {
          const convertedIngredients = this.#recipeConverter.convertIngredientValues(this.#recipe)
          this.#displayIngredients(convertedIngredients)
        }
      })
    }

    /**
     * Sets the recipe data to be displayed in the recipe card.
     *
     * @param {Object} recipeData - The recipe data object.
     */
    set recipe (recipeData) {
      if (!recipeData) {
        return
      }
      this.#recipe = recipeData

      this.#displayRecipe(recipeData)
    }

    /**
     * Displays the recipe data in the recipe card.
     * 
     * @param {Object} recipeData - The recipe data object.
     */
    #displayRecipe (recipeData) {
      const title = this.shadowRoot.querySelector('.recipeTitle')
      const image = this.shadowRoot.querySelector('.recipeImage')
      const origin = this.shadowRoot.querySelector('.recipeOrigin')

      title.textContent = recipeData.name
      image.src = recipeData.imageSrc
      image.alt = recipeData.imageAlt
      origin.textContent = `Origin: ${recipeData.origin || 'Unknown'}`

      this.#displayIngredients(recipeData.ingredients)
      this.#displayInstructions(recipeData.instructions)
    }

    /**
     * Displays the list of ingredients in the recipe card.
     * 
     * @param {Array} ingredients - An array of ingredient objects.
     */
    #displayIngredients (ingredients) {
      const ingredientsList = this.shadowRoot.querySelector('.recipeIngredients')
      ingredientsList.innerHTML = ''

      ingredients.forEach(ingredientData => {
        const listItem = document.createElement('li')

        listItem.textContent = `${ingredientData.amount || ''} ${ingredientData.unit} ${ingredientData.ingredient}`
        
        ingredientsList.appendChild(listItem)
      })
    }

    /**
     * Displays the list of instructions in the recipe card.
     * 
     * @param {Array} instructions - An array of instruction steps.
     */
    #displayInstructions (instructions) {
      const instructionsList = this.shadowRoot.querySelector('.recipeInstructions')
      instructions.innerHTML = ''

      instructions.forEach(step => {
        const listItem = document.createElement('li')
        listItem.textContent = step
        instructionsList.appendChild(listItem)
      })
    }
  }
)