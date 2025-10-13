/**
 * Module for the liters to pints converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class PintsToLitersConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 2.1134
  }


  /**
   * Converts the volume from pints to liters.
   *
   * @param {Number} pints - The volume to be converted
   * @return {Number} - The volume in liters
   */
  convert(pints) {
    return pints / this._conversionRate
  }
}
