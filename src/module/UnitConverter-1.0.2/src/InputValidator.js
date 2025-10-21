/**
 * Module for the input validator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

export class InputValidator {
  #FahrenheitAbsoluteZero
  #CelsiusAbsoluteZero

  constructor() {
    this.#FahrenheitAbsoluteZero = -459.67
    this.#CelsiusAbsoluteZero = -273.15
  }

  validateInputTypeNumber(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }

  validateInputTypeString(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string')
    }
  }

  validateInputTypeArray(input) {
    if (!Array.isArray(input)) {
      throw new Error('Input must be an array')
    }
  }

  validatePositiveNumber(input) {
    if (input < 0) {
      throw new Error('Number must be positive')
    }
  }

  /**
   * Validates the Celsius temperature range.
   * 
   * @param {Number} celsius - The temperature in celsius
   * @throws {Error} - If the temperature is below absolute zero 
   */
  validateCelsiusRange(celsius) {
    if (celsius < this.#CelsiusAbsoluteZero) {
      throw new Error('Temperature must be greater than or equal to -273.15°C')
    }
  }

  /**
   * Validates the Fahrenheit temperature range.
   * 
   * @param {Number} fahrenheit - The temperature in fahrenheit
   * @throws {Error} - If the temperature is below absolute zero 
   */
  validateFahrenheitRange(fahrenheit) {
    if (fahrenheit < this.#FahrenheitAbsoluteZero) {
      throw new Error('Temperature must be greater than or equal to -459.67°F')
    }
  }
}
