/**
 * Module for the speed converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterBaseClass } from '../ConverterBaseClass.js'
import { MphToKmhConverter } from './MphToKmhConverter.js'
import { KmhToMphConverter } from './KmhToMphConverter.js'
import { FpsToMsConverter } from './FpsToMsConverter.js'
import { MsToFpsConverter } from './MsToFpsConverter.js'

export class SpeedConverter extends ConverterBaseClass {

  _mphToKmhConverter
  _kmhToMphConverter
  _fpsToMsConverter
  _msToFpsConverter

  constructor() {
    super()
    this.#initializeConverters()

    // The unit abbreviation conversions
    this._unitAbbreviationConversions = {
      "mph": "milesPerHour",
      "miles per hour": "milesPerHour",
      "km/h": "kilometersPerHour",
      "kilometers per hour": "kilometersPerHour",
      "fps": "feetPerSecond",
      "feet per second": "feetPerSecond",
      "m/s": "metersPerSecond",
      "meters per second": "metersPerSecond"
    }

    // The available conversions
    this._availableConversions = {
      "milesPerHour-kilometersPerHour": this._mphToKmhConverter,
      "kilometersPerHour-milesPerHour": this._kmhToMphConverter,
      "feetPerSecond-metersPerSecond": this._fpsToMsConverter,
      "metersPerSecond-feetPerSecond": this._msToFpsConverter
    }
  }

  /**
   * Initializes the converters.
   */
  #initializeConverters() {
    this._mphToKmhConverter = new MphToKmhConverter()
    this._kmhToMphConverter = new KmhToMphConverter()
    this._fpsToMsConverter = new FpsToMsConverter()
    this._msToFpsConverter = new MsToFpsConverter()
  }

  /**
   * Handles speed conversion selection and converts the number.
   * 
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convert(convertFrom, convertTo, numberToConvert) {
    this._validateNumberInput(numberToConvert)
    this._validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this._normalizeAbbreviation(convertFrom)
    const normalizedTo = this._normalizeAbbreviation(convertTo)
    

    return this._convertValue(normalizedFrom, normalizedTo, numberToConvert)
  }
}
