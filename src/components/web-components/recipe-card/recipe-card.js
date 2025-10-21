/**
 * The Recipe Card web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import {recipeCardTemplate} from './recipeCardTemplate.js'
import '../custom-button/custom-button.js'
import { RecipeConverter } from '../../classes/recipeConverter/recipeConverter.js'

customElements.define("recipe-card",
  class RecipeCard extends HTMLElement {
    #recipeConverter

    #currentRecipe

    #convertedIngredients

    #isConvertedIngredients

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(recipeCardTemplate.content.cloneNode(true))

      this.#recipeConverter = new RecipeConverter()
      this.#isConvertedIngredients = false
    }

    connectedCallback () {
      this.#createConvertButton()
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
      this.#currentRecipe = recipeData
      this.#convertedIngredients = undefined

      this.#displayRecipe(recipeData)
    }

    #createConvertButton () {
      const customButton = document.createElement('custom-button')
      customButton.action = 'convert-values'
      customButton.setButtonText('Convert Values')
      this.shadowRoot.querySelector('.customButtonContainer')
      .appendChild(customButton)

      customButton.addEventListener('button-click', e => {
        if (e.detail.action === 'convert-values') {
          this.#handleRecipeConversion()
        }
      })
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

    #handleRecipeConversion () {
      if (!this.#isConvertedIngredients) {
        // Convert if not already converted
        if (!this.#convertedIngredients) {
          this.#convertedIngredients = this.#recipeConverter.convertIngredientValues(this.#currentRecipe.ingredients)
        }

        this.#displayIngredients(this.#convertedIngredients)
        this.#isConvertedIngredients = true

        this.shadowRoot.querySelector('.customButtonContainer custom-button').setButtonText('Show Original')
      } else {
        // Show original
        this.#displayIngredients(this.#currentRecipe.ingredients)
        this.#isConvertedIngredients = false

        this.shadowRoot.querySelector('.customButtonContainer custom-button').setButtonText('Convert Values')
      }
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
      instructionsList.innerHTML = ''

      instructions.forEach(step => {
        const listItem = document.createElement('li')
        listItem.textContent = step
        instructionsList.appendChild(listItem)
      })
    }
  }
)