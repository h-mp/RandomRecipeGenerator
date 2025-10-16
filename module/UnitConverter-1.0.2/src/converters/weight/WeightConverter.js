/**
 * Module for the weight converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterBaseClass } from '../ConverterBaseClass.js'
import { KilogramsToPoundsConverter } from './KilogramsToPoundsConverter.js'
import { PoundsToKilogramsConverter } from './PoundsToKilogramsConverter.js'
import { GramsToOuncesConverter } from './GramsToOuncesConverter.js'
import { OuncesToGramsConverter } from './OuncesToGramsConverter.js'

export class WeightConverter extends ConverterBaseClass {

  _kilogramsToPoundsConverter
  _poundsToKilogramsConverter
  _gramsToOuncesConverter
  _ouncesToGramsConverter

  constructor() {
    super()
    this.#initializeConverters()

    this._unitAbbreviationConversions = {
      "kg": "kilograms",
      "kgs": "kilograms",
      "kilogram": "kilograms",
      "kilo": "kilograms",

      "lb": "pounds",
      "lbs": "pounds",
      "pound": "pounds",

      "g": "grams",
      "gram": "grams",

      "oz": "ounces",
      "ounce": "ounces"
    }

    this._availableConversions = {
      "kilograms-pounds": this._kilogramsToPoundsConverter,
      "pounds-kilograms": this._poundsToKilogramsConverter,
      "grams-ounces": this._gramsToOuncesConverter,
      "ounces-grams": this._ouncesToGramsConverter
    }
  }

  /**
   * Initializes the converters.
   */
  #initializeConverters() {
    this._kilogramsToPoundsConverter = new KilogramsToPoundsConverter()
    this._poundsToKilogramsConverter = new PoundsToKilogramsConverter()
    this._gramsToOuncesConverter = new GramsToOuncesConverter()
    this._ouncesToGramsConverter = new OuncesToGramsConverter()
  }

  /**
   * Handles temperature conversion selection and converts the number.
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
