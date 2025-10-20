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
    const maxIngredients = 30

    for (let i = 1; i <= maxIngredients; i++) {
      const ingredient = data[`strIngredient${i}`]
      const measure = data[`strMeasure${i}`]      
      
      if (ingredient && ingredient.trim() !== '') {
        const {amount, unit} = this.#separateAmountAndUnit(measure || '')

        ingredients.push({
          ingredient: ingredient.trim(),
          amount: amount || '',
          unit: unit || ''
        })
      }
    }
    return ingredients
  }

  /**
   * Separates the amount and unit from a string.
   * 
   * @param {String} measure - The measure string from the API.
   * @returns {Object} - An object with amount and unit properties.
   */
  #separateAmountAndUnit(measure) {
    if (!measure) return { amount: '', unit: '' }

    const trimmedMeasure = measure.trim()

    // Get the first number-unit combination in the string
    const match = trimmedMeasure.match(/^([\d\s\/.,½¼¾⅓⅔⅛⅜⅝⅞]+)?\s*(.*)$/)

    if (!match) return { amount: '', unit: '' }

    const numberAmount = match[1] ? match[1].trim() : ''
    const unitText = match[2] ? match[2].trim() : ''

    const convertedAmount = this.#convertMixedAmounts(numberAmount)

    return { amount: convertedAmount, unit: unitText }
  }

  /**
   * Converts mixed amount strings to a float value.
   * 
   * @param {String} amountStr - The amount string from the measure.
   */
  #convertMixedAmounts(amountStr) {
    if (!amountStr || amountStr.trim() === '') return ''

    // Mixed numbers
    if (amountStr.includes(' ')) {
      return this.#convertMixedNumbers(amountStr)
    }

    // Fractions
    if (amountStr.includes('/')) {
      return this.#convertFraction(amountStr)
    }

    return parseFloat(amountStr)
  }

  /**
   * Converts mixed number strings to a usable float value.
   * 
   * @param {String} amountStr - The mixed number string.
   */
  #convertMixedNumbers(amountStr) {
    const [whole, fraction] = amountStr.split(' ')
    return parseFloat(whole) + this.#convertFraction(fraction)
  }

  /**
   * Converts a fraction string to a usable float value.
   * 
   * @param {String} fractionStr - The fraction string.
   */
  #convertFraction(fractionStr) {
    const [numerator, denominator] = fractionStr.split('/')
    return parseFloat(numerator) / parseFloat(denominator)
  }

  /**
   * Formats the instructions string into an array of individual steps.
   * 
   * @param {String} instructions - The raw instructions string from the API.
   * @returns {Array} - An array of formatted instruction steps.
   */
  #formatInstructions(instructions) {
    if (!instructions || instructions.trim() === '') {
      return ['No instructions provided.']
    }
    // Split by new lines and remove empty lines
    return instructions
      .split(/\r?\n/)
      .map(step => step.trim())
      .filter(step => step !== '')
  }
}