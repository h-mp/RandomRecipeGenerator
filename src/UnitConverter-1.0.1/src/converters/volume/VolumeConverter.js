/**
 * Module for the volume converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterBaseClass } from '../ConverterBaseClass.js'
import { CupsToDecilitersConverter } from './CupsToDecilitersConverter.js'
import { DecilitersToCupsConverter } from './DecilitersToCupsConverter.js'
import { GallonsToLitersConverter } from './GallonsToLitersConverter.js'
import { LitersToGallonsConverter } from './LitersToGallonsConverter.js'
import { PintsToLitersConverter } from './PintsToLitersConverter.js'
import { LitersToPintsConverter } from './LitersToPintsConverter.js'

export class VolumeConverter extends ConverterBaseClass {
  _cupsToDecilitersConverter
  _decilitersToCupsConverter
  _gallonsToLitersConverter
  _litersToGallonsConverter
  _pintsToLitersConverter
  _litersToPintsConverter

  constructor() {
    super()
    this.#initializeConverters()

    this._unitAbbreviationConversions = {
      "c": "cups",
      "dl": "deciliters",
      "gal": "gallons",
      "l": "liters",
      "pt": "pints"
    }

    this._availableConversions = {
      "cups-deciliters": this._cupsToDecilitersConverter,
      "deciliters-cups": this._decilitersToCupsConverter,
      "gallons-liters": this._gallonsToLitersConverter,
      "liters-gallons": this._litersToGallonsConverter,
      "pints-liters": this._pintsToLitersConverter,
      "liters-pints": this._litersToPintsConverter
    }
  }

  /**
   * Initializes the converters.
   */
  #initializeConverters() {
    this._cupsToDecilitersConverter = new CupsToDecilitersConverter()
    this._decilitersToCupsConverter = new DecilitersToCupsConverter()
    this._gallonsToLitersConverter = new GallonsToLitersConverter()
    this._litersToGallonsConverter = new LitersToGallonsConverter()
    this._pintsToLitersConverter = new PintsToLitersConverter()
    this._litersToPintsConverter = new LitersToPintsConverter()
  }

  /**
   * Handles volume conversion selection and converts the number.
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
