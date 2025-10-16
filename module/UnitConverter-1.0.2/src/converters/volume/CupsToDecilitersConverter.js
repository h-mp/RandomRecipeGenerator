/**
 * Module for the cups to deciliters converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class CupsToDecilitersConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.3658
  }


  /**
   * Converts the volume from cups to deciliters.
   * 
   * @param {Number} cups - The volume to be converted
   * @return {Number} - The volume in deciliters
   */
  convert(cups) {
    return cups * this._conversionRate
  }
}
