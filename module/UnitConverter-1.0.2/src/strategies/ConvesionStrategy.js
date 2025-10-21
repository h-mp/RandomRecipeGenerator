/**
 * Module for the conversion strategy interface.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

export class ConversionStrategy {
  // Should be protected
  _conversionRate

  convert(number) {
    throw new Error('Not implemented')
  }
}