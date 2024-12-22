/**
 * Tests for the LengthConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { LengthConverter } from '../../src/converters/length/LengthConverter.js'

const lengthConverter = new LengthConverter()

// Test case to check meters to feet conversion
test('Convert meters to feet', () => {
  expect(lengthConverter.convert('meters', 'feet', 2)).toBeCloseTo(6.561, 2)

  expect(lengthConverter.convert('m', 'ft', 23)).toBeCloseTo(75.459, 2)
})

// Test case to check feet to meters conversion
test('Convert feet to meters', () => {
  expect(lengthConverter.convert('feet', 'meters', 151.4)).toBeCloseTo(46.146, 2)

  expect(lengthConverter.convert('ft', 'm', 0.5)).toBeCloseTo(0.152, 2)
})

// Test case to check centimeters to inches conversion
test('Convert centimeters to inches', () => {
  expect(lengthConverter.convert('centimeters', 'inches', 70)).toBeCloseTo(27.559, 2)

  expect(lengthConverter.convert('cm', 'in', 9)).toBeCloseTo(3.543, 2)
})

// Test case to check inches to centimeters conversion
test('Convert inches to centimeters', () => {
  expect(lengthConverter.convert('inches', 'centimeters', 9)).toBeCloseTo(22.86, 2)

  expect(lengthConverter.convert('in', 'cm', 3)).toBeCloseTo(7.62, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => lengthConverter.convert('m', 'in', '21')).toThrowError('Input must be a number')

  expect(() => lengthConverter.convert('m', 'in', -1)).toThrowError('Number must be positive')

  expect(() => lengthConverter.convert('ft', 'm', NaN)).toThrowError('Input must be a number')
})
