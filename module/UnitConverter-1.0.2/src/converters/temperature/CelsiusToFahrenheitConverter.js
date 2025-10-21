/**
 * Module for the Celsius to Fahrenheit converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'
import { InputValidator } from '../../InputValidator.js'

export class CelsiusToFahrenheitConverter extends ConversionStrategy {
  #inputValidator
  #CelsiusToFahrenheitConversionFactor
  #CelsiusToFahrenheitConversionOffset

  constructor() {
    super()
    this.#inputValidator = new InputValidator()
    this.#CelsiusToFahrenheitConversionFactor = 1.8
    this.#CelsiusToFahrenheitConversionOffset = 32
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

    return (celsius * this.#CelsiusToFahrenheitConversionFactor) + this.#CelsiusToFahrenheitConversionOffset
  }
}
