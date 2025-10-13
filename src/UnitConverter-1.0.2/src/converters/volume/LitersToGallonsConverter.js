/**
 * Module for the liters to gallons converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class LitersToGallonsConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 0.26417
  }


  /**
   * Converts the volume from liters to gallons.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in gallons 
   */
  convert(liters) {
    return liters * this._conversionRate
  }
}
