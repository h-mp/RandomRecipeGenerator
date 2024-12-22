/**
 * Module for the deciliters to cups converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class DecilitersToCupsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.3658
  }


  /**
   * Converts the volume from deciliters to cups.
   *
   * @param {Number} deciliters - The volume to be converted
   * @return {Number} - The volume in cups
   */
  convert(deciliters) {
    return deciliters / this._conversionRate
  }
}
