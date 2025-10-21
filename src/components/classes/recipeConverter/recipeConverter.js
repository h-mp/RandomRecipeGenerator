/**
 * The RecipeConverter class.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import { UNIT_CONVERSIONS } from './unitConversions.js'
import { UnitConverter } from '../../../module/UnitConverter-1.0.2/src/unitConverter.js'

export class RecipeConverter {
  #unitConverter

  constructor () {
    this.#unitConverter = new UnitConverter()
  }

  /**
   * Converts the ingredient values in the recipe data.
   * 
   * @param {Object} ingredients - The ingredients array from the recipe data.
   */
  convertIngredientValues (ingredients) {
    const convertedIngredients = ingredients.map(ingredient => this.#convertIngredient(ingredient))

    return convertedIngredients
  }

  /**
   * Converts a single ingredient's amount and unit.
   * 
   * @param {Object} ingredient - The ingredient object with an amount and unit.
   */
  #convertIngredient (ingredient) {
    if (!ingredient.amount || isNaN(ingredient.amount) || !ingredient.unit || ingredient.unit === '') {
      return {...ingredient}
    }

    const targetConversion = this.#getConversion(ingredient.unit)
    if (!targetConversion) {
      return {...ingredient}
    }

    const convertedAmount = this.#unitConverter.convertAndRoundUp(
      targetConversion.category, 
      ingredient.unit, 
      targetConversion.targetUnit, 
      parseFloat(ingredient.amount), 
      2
    )

    return {
      ...ingredient,
      amount: convertedAmount,
      unit: targetConversion.targetUnit
    }
  }

  /**
   * Gets the target conversion object for the given unit.
   * 
   * @param {String} unit - The unit to convert.
   */
  #getConversion (unit) {
    for (const conversion of UNIT_CONVERSIONS) {
      if (conversion.unitVariants.includes(unit.toLowerCase())) {
        return conversion
      }
    }
  }
}
