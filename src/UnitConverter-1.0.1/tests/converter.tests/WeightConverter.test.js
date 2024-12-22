/**
 * Tests for the WeightConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { WeightConverter } from '../../src/converters/weight/WeightConverter'

const weightConverter = new WeightConverter()

// Test case to check kilogram to pound conversion
test('Convert kilograms to pounds', () => {
  expect(weightConverter.convert('kilograms', 'pounds', 21)).toBeCloseTo(46.297, 2)

  expect(weightConverter.convert('kg', 'lb', 3.5)).toBeCloseTo(7.716, 2)
})

// Test case to check pound to kilogram conversion
test('Convert pounds to kilograms', () => {
  expect(weightConverter.convert('pounds', 'kilograms', 1.5)).toBeCloseTo(0.68, 2)

  expect(weightConverter.convert('lb', 'kg', 10)).toBeCloseTo(4.536, 2)
})

// Test case to check gram to ounce conversion
test('Convert grams to ounces', () => {
  expect(weightConverter.convert('grams', 'ounces', 567)).toBeCloseTo(20, 2)

  expect(weightConverter.convert('g', 'oz', 100)).toBeCloseTo(3.527, 2)
})

// Test case to check ounce to gram conversion
test('Convert ounces to grams', () => {
  expect(weightConverter.convert('ounces', 'grams', 5.5)).toBeCloseTo(155.92, 2)

  expect(weightConverter.convert('oz', 'g', 10)).toBeCloseTo(283.49, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => weightConverter.convert('kilograms', 'pounds', 'string')).toThrowError('Input must be a number')

  expect(() => weightConverter.convert('kilograms', 'pounds', NaN)).toThrowError('Input must be a number')

  expect(() => weightConverter.convert('kg', 'pounds', -3)).toThrowError('Number must be positive')
})
