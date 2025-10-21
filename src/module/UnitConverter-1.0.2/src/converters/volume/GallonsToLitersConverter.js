/**
 * Module for the gallons to liters converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class GallonsToLitersConverter extends ConversionStrategy {

  constructor() {
    super()
    this._conversionRate = 0.26417
  }


  /**
   *Converts the volume from liters to gallons.
   *
   * @param {Number} gallons - The volume to be converted
   * @return {Number} - The volume in liters
   */
   convert(gallons) {
    return gallons / this._conversionRate
  }
}
