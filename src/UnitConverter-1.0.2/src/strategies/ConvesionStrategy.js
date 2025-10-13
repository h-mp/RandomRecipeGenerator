/**
 * Module for the conversion strategy interface.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

export class ConversionStrategy {
  /**
   * The conversion rate. 
   * Should be protected.
   */
  _conversionRate

  /**
   * Converts the number.
   * 
   * @param {Number} number - The number to convert
   */
  convert(number) {
    throw new Error('Not implemented')
  }
}