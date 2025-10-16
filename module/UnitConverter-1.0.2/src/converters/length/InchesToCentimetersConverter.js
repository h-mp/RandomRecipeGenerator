/**
 * Module for the inches to centimeters converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class InchesToCentimetersConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 0.39370
  }

  /**
   * Converts the number from inches to centimeters.
   * 
   * @param {Number} inches - The number to convert in inches
   * @returns {Number} - The converted number
   */
  convert(inches) {
    return inches / this._conversionRate
  }
}
