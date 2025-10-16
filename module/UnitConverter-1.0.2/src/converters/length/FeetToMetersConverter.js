/**
 * Module for the feet to meters converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class FeetToMetersConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 3.2808
  }

  /**
   * Converts the number from feet to meters.
   * 
   * @param {Number} feet - The number to convert in feet
   * @returns {Number} - The converted number
   */
  convert(feet) {
    return feet / this._conversionRate
  }
}
