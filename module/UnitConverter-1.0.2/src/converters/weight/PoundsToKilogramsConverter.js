/**
 * Module for the pounds to kilograms converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class PoundsToKilogramsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.2046
  }

  /**
   * Converts the weight from pounds to kilograms.
   *
   * @param {Number} pounds - The weight to be converted
   * @returns {Number} - The weight in kilograms
   */
  convert(pounds) {
    return pounds / this._conversionRate
  }
}
