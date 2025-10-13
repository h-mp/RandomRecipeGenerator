/**
 * Module for the meters/second to feet/second converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class MsToFpsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 3.280840
  }

  /**
   * Converts the speed from meters/second to feet/second
   *
   * @param {Number} metersPerSecond - The speed to be converted
   * @return {Number} - The speed in feet/second
   */
  convert(metersPerSecond) {
    return metersPerSecond * this._conversionRate
  }
}