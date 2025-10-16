/**
 * Module for the Celsius to Fahrenheit converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'
import { InputValidator } from '../../InputValidator.js'

export class CelsiusToFahrenheitConverter extends ConversionStrategy {
  #inputValidator
  /**
   * Conversion factor from Celsius to Fahrenheit.
   */
  #CToFConversionFactor

  /**
   * Conversion offset from Celsius to Fahrenheit.
   */
  #CToFConversionOffset

  constructor() {
    super()
    this.#inputValidator = new InputValidator()
    this.#CToFConversionFactor = 1.8
    this.#CToFConversionOffset = 32
  }

  /**
   * Converts the temperature from Celsius to Fahrenheit.
   *
   * @param {Number} celsius - The temperature in Celsius
   * @return {Number} - The temperature in Fahrenheit
   * @throws {Error} - If the temperature is not within the valid range
   */
  convert(celsius) {
    this.#inputValidator.validateCelsiusRange(celsius)

    return (celsius * this.#CToFConversionFactor) + this.#CToFConversionOffset
  }
}
