/**
 * The Recipe Formulator class.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

export class RecipeFormulator {
  constructor() {}

  /**
   * Formulates the recipe data into a more structured format.
   * 
   * @param {Object} recipeData - The raw recipe data from the API.
   * @returns {Object} - The formulated recipe data.
   */
  formulateRecipeData(recipeData) {
    if (!recipeData) {
      throw new Error("No data provided to formulate")
    }
    const ingredients = this.#separateIngredientData(recipeData)
    const instructions = this.#formatInstructions(recipeData.strInstructions)

    return {
      name: recipeData.strMeal,
      imageSrc: recipeData.strMealThumb,
      imageAlt: recipeData.strMeal,
      origin: recipeData.strArea || 'Unknown',
      ingredients: ingredients,
      instructions: instructions
    }
  }

  /**
   * Separates ingredient and measure data from the raw recipe data.
   * 
   * @param {Object} data - The raw recipe data from the API.
   * @returns {Array} - An array of ingredient objects with ingredient and measure properties.
   */
  #separateIngredientData(data) {
    const ingredients = []

    for (let i = 1; i <= 30; i++) {
      const ingredient = data[`strIngredient${i}`]
      const measure = data[`strMeasure${i}`]
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure?.trim() || '',
        })
      }
    }
    return ingredients
  }

  /**
   * Formats the instructions string into an array of individual steps.
   * 
   * @param {String} instructions - The raw instructions string from the API.
   * @returns {Array} - An array of formatted instruction steps.
   */
  #formatInstructions(instructions) {
    // Split instructions by new lines.
    const formattedInstructions = instructions.split('\r\n')
    // Trim whitespace from each step and filter out empty strings.
    formattedInstructions.map(step => step.trim())
    formattedInstructions.filter(step => step !== "")
    return formattedInstructions
  }
}