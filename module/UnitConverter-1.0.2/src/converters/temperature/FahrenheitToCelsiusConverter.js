/**
 * Module for the Celsius to Fahrenheit converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'
import { InputValidator } from '../../InputValidator.js'

export class FahrenheitToCelsiusConverter extends ConversionStrategy {
  #inputValidator
  #FahrenheitToCelsiusConversionFactor
  #FahrenheitToCelsiusConversionOffset

  constructor() {
    super()
    this.#inputValidator = new InputValidator()
    this.#FahrenheitToCelsiusConversionFactor = 1.8
    this.#FahrenheitToCelsiusConversionOffset = 32
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

    return (fahrenheit - this.#FahrenheitToCelsiusConversionOffset) / this.#FahrenheitToCelsiusConversionFactor
  }
}
