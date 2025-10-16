/**
 * Module for the ounces to grams converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class OuncesToGramsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 0.035274
  }

  /**
   * Converts the weight from ounces to grams.
   *
   * @param {Number} ounces - The weight to be converted
   * @returns {Number} - The weight in grams
   */
  convert(ounces) {
    return ounces / this._conversionRate
  }
}
