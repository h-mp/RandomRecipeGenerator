/**
 * The Recipe Application web component.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { recipeApplicationTemplate } from './recipeApplicationTemplate.js'
import { ApiHandler } from '../apiHandler/apiHandler.js'
import { RecipeFormulator } from '../recipeFormulator/recipeFormulator.js'
import '../custom-button/custom-button.js'
import '../recipe-card/recipe-card.js'

customElements.define("recipe-application", 
  class RecipeApplication extends HTMLElement {
    /**
     * The recipe card element.
     */
    #recipeCard

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(recipeApplicationTemplate.content.cloneNode(true))
    }

    connectedCallback () {
      this.#createRandomRecipeButton()
    }

    /**
     * Creates the button for fetching a random recipe.
     */
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

    /**
     * Displays a random recipe.
     */
    async #displayRandomRecipe () {
      const recipe = await this.#fetchRecipe()
      const formulatedRecipe = this.#formulateRecipeData(recipe)

      // Create recipe card if it doesn't exist.
      if (recipe && !this.#recipeCard) {
        this.#createRecipeCard()
      }

      this.#recipeCard.recipe = formulatedRecipe
    }

    /**
     * Fetches a random recipe from the API.
     * 
     * @returns {Object} A random recipe object from the API.
     */
    async #fetchRecipe () {
      const apiHandler = new ApiHandler('https://www.themealdb.com/api/json/v1/1')
      const recipe = await apiHandler.fetchRandomRecipe()
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

    /**
     * Creates a new recipe card.
     */
    #createRecipeCard () {
      const recipeCardContainer = this.shadowRoot.querySelector('.recipeCardContainer')
      const recipeCard = document.createElement('recipe-card')
      this.#recipeCard = recipeCardContainer.appendChild(recipeCard)
    }
  }
)