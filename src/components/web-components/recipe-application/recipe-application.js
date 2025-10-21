/**
 * The Recipe Application web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { recipeApplicationTemplate } from './recipeApplicationTemplate.js'
import { ApiHandler } from '../../classes/apiHandler/apiHandler.js'
import { RecipeFormulator } from '../../classes/recipeFormulator/recipeFormulator.js'
import '../custom-button/custom-button.js'
import '../recipe-card/recipe-card.js'

customElements.define("recipe-application", 
  class RecipeApplication extends HTMLElement {
    #recipeCard
    #apiHandler

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(recipeApplicationTemplate.content.cloneNode(true))

      this.#apiHandler = new ApiHandler(import.meta.env.VITE_THEMEALDB_API_URL)
    }

    connectedCallback () {
      this.#createRandomRecipeButton()
    }

    #createRandomRecipeButton () {
      const customButton = document.createElement('custom-button')
      customButton.action = 'get-random-recipe'
      customButton.setButtonText('Get Random Recipe')

      this.shadowRoot.querySelector('.startButtonContainer').appendChild(customButton)

      customButton.addEventListener('button-click', e => {
        if (e.detail.action === 'get-random-recipe') {
          this.#displayRandomRecipe()
        }
      })
    }

    async #displayRandomRecipe () {
      try {
        const recipe = await this.#fetchRecipe()
        const formulatedRecipe = this.#formulateRecipeData(recipe)

        // Create recipe card if it doesn't exist.
        if (recipe && !this.#recipeCard) {
          this.#createRecipeCard()
        }

        this.#recipeCard.recipe = formulatedRecipe
        this.shadowRoot.querySelector('.recipeCardContainer').style.display = 'flex'
      } catch (error) {
        this.#showErrorMessage("A problem occurred, please try again.")
      }
    }

  #showErrorMessage(message) {
    const displayTime = 4000
    const errorMessage = this.shadowRoot.querySelector('#errorMessage')
    errorMessage.textContent = message
    errorMessage.style.display = 'block'

    setTimeout(() => {
      errorMessage.style.display = 'none'
    }, displayTime)
  }

    async #fetchRecipe () {
      const recipe = await this.#apiHandler.fetchRandomRecipe()

      return recipe
    }

    /**
     * Formulates the recipe data into a more structured format.
     * 
     * @param {Object} recipe - The raw recipe data from the API.
     * @returns {Object} - The formulated recipe data.
     */
    #formulateRecipeData (recipe) {
      const recipeFormulator = new RecipeFormulator()
      const formulatedRecipe = recipeFormulator.formulateRecipeData(recipe)

      return formulatedRecipe
    }

    #createRecipeCard () {
      const recipeCardContainer = this.shadowRoot.querySelector('.recipeCardContainer')
      const recipeCard = document.createElement('recipe-card')
      this.#recipeCard = recipeCardContainer.appendChild(recipeCard)
    }
  }
)