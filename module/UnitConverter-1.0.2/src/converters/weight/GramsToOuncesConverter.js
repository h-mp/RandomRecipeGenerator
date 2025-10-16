/**
 * Module for the grams to ounces converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class GramsToOuncesConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 0.035274
  }

  /**
   * Converts the weight from grams to ounces.
   *
   * @param {Number} grams - The weight to be converted
   * @returns {Number} - The weight in ounces
   */
  convert(grams) {
    return grams * this._conversionRate
  }
}
