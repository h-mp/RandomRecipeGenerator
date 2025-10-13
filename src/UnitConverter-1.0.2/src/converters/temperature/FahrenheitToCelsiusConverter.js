/**
 * Module for the Celsius to Fahrenheit converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'
import { InputValidator } from '../../InputValidator.js'

export class FahrenheitToCelsiusConverter extends ConversionStrategy {
  #inputValidator
  /**
   * Conversion factor from Fahrenheit to Celsius.
   */
  #FToCConversionFactor

  /**
   * Conversion offset from Fahrenheit to Celsius.
   */
  #FToCConversionOffset

  constructor() {
    super()
    this.#inputValidator = new InputValidator()
    this.#FToCConversionFactor = 1.8
    this.#FToCConversionOffset = 32
  }

  /**
   * Converts the temperature from Fahrenheit to Celsius.
   *
   * @param {Number} fahrenheit - The temperature in Fahrenheit
   * @returns {Number} - The temperature in Celsius
   * @throws {Error} - If the temperature is not within the valid range
   */
  convert(fahrenheit) {
    this.#inputValidator.validateFahrenheitRange(fahrenheit)

    return (fahrenheit - this.#FToCConversionOffset) / this.#FToCConversionFactor
  }
}
