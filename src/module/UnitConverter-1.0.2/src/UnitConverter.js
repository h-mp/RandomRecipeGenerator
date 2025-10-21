/**
 * Module for the unit converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from './InputValidator.js'
import { ConversionCoordinator } from './ConversionCoordinator.js'

export class UnitConverter {
  #inputValidator
  #conversionCoordinator

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#conversionCoordinator = new ConversionCoordinator()
  }

  /**
   * Validates the string inputs.
   * 
    * @param {Array} stringArray - The array of strings to validate
   */
  #validateStringInputs(stringArray) {
    this.#inputValidator.validateInputTypeArray(stringArray)

    stringArray.forEach((string) => {
      this.#inputValidator.validateInputTypeString(string)
    })
  }

  /**
   * Validates the number inputs.
   * 
   * @param {String} [conversionType] - The type of conversion
   * @param {Array|Number} numberArray - The array of numbers or a single number to validate
   */
  #validateNumberInputs(conversionType, numberArray) {
    this.#inputValidator.validateInputTypeArray(numberArray)

    numberArray.forEach((number) => {
      this.#inputValidator.validateInputTypeNumber(number)
      this.#validatePositiveNumber(conversionType, number)
    })
  }

  /**
   * Validates if the number is positive for non-temperature conversions.
   * 
   * @param {String} conversionType - The type of conversion
   * @param {Number} numberToConvert - The number to convert
   */
  #validatePositiveNumber(conversionType, numberToConvert) {
    if (conversionType !== 'temperature') { 
      this.#inputValidator.validatePositiveNumber(numberToConvert)
    }
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
  convertTemperature(convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([convertFrom, convertTo])
    this.#validateNumberInputs("temperature", [numberToConvert])

    return this.#conversionCoordinator.handleTemperatureConversion(convertFrom, convertTo, numberToConvert)
  }

  /**
   * Handles length conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertLength(convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([convertFrom, convertTo])
    this.#validateNumberInputs("length", [numberToConvert])

    return this.#conversionCoordinator.handleLengthConversion(convertFrom, convertTo, numberToConvert)
  }

  /**
   * Handles length conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertSpeed(convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([convertFrom, convertTo])
    this.#validateNumberInputs("speed", [numberToConvert])

    return this.#conversionCoordinator.handleSpeedConversion(convertFrom, convertTo, numberToConvert)
  }

  /**
   * Handles weight conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertWeight(convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([convertFrom, convertTo])
    this.#validateNumberInputs("weight", [numberToConvert])

    return this.#conversionCoordinator.handleWeightConversion(convertFrom, convertTo, numberToConvert)
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
  convertVolume(convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([convertFrom, convertTo])
    this.#validateNumberInputs("volume", [numberToConvert])

    return this.#conversionCoordinator.handleVolumeConversion(convertFrom, convertTo, numberToConvert)
  }

  /**
   * Handles multiple value conversion selection and converts the numbers.
   * 
   * @param {String} conversionType - The type of conversion i.e. temperature, length, weight, volume
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Array} numbersToConvert - The numbers to convert
   * @returns {Array} - The converted numbers
   */
  convertMultipleValues(conversionType, convertFrom, convertTo, numbersToConvert) {
    this.#validateStringInputs([conversionType, convertFrom, convertTo])
    this.#validateNumberInputs(conversionType, numbersToConvert)

    // Choose the conversion method based on the conversion type
    const conversionMethod = this.#conversionCoordinator.chooseConversionMethod(conversionType)

    const convertedNumbers = numbersToConvert.map(number => conversionMethod(convertFrom, convertTo, number))

    return convertedNumbers
  }

  /**
   * Handles conversion selection, converts the number and returns a summary of the conversion.
   * 
   * @param {String} conversionType - The type of conversion i.e. temperature, length, weight, volume
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @returns {Object} - The converted number with a summary of the conversion
   */
  convertWithSummary(conversionType, convertFrom, convertTo, numberToConvert) {
    this.#validateStringInputs([conversionType, convertFrom, convertTo])
    this.#validateNumberInputs(conversionType, [numberToConvert])

    // Choose the conversion method based on the conversion type
    const conversionMethod = this.#conversionCoordinator.chooseConversionMethod(conversionType)

    const convertedNumber = conversionMethod(convertFrom, convertTo, numberToConvert)

    const summary = {
      conversionType: conversionType,
      convertFrom: convertFrom,
      convertTo: convertTo,
      numberToConvert: numberToConvert,
      convertedNumber: convertedNumber
    }

    return summary
  }

  /**
   * Handles conversion selection, converts the number and rounds it up to the chosen accuracy. 
   * 
   * @param {String} conversionType - The type of conversion i.e. temperature, length, weight, volume
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @param {Number} decimalPlaces - The number of decimal places to round the converted number to
   * @returns {Number} - The converted number rounded up
   */
  convertAndRoundUp(conversionType, convertFrom, convertTo, numberToConvert, decimalPlaces) {
    this.#validateStringInputs([conversionType, convertFrom, convertTo])
    this.#validateNumberInputs(conversionType, [numberToConvert, decimalPlaces])

    // Choose the conversion method based on the conversion type
    const conversionMethod = this.#conversionCoordinator.chooseConversionMethod(conversionType)

    const convertedNumber = conversionMethod(convertFrom, convertTo, numberToConvert)

    return parseFloat(convertedNumber.toFixed(decimalPlaces))
  }
}
