/**
 * Module for the liters to pints converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class LitersToPintsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.1134
  }


  /**
   * Converts the volume from liters to pints.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in pints
   */
  convert(liters) {
    return liters * this._conversionRate
  }
}
