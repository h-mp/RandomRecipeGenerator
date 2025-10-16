/**
 * Module for the kilograms to pounds converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class KilogramsToPoundsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.2046
  }

  /**
   * Converts the weight from kilograms to pounds.
   *
   * @param {Number} kilograms - The weight to be converted
   * @returns {Number} - The weight in pounds
   */
  convert(kilograms) {
    return kilograms * this._conversionRate
  }
}
