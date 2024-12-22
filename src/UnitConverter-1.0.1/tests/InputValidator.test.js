/**
 * Tests for the InputValidator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../src/InputValidator.js'

const inputValidator = new InputValidator()

// Test case to check input type number validation
test('Validate input type number', () => {
  expect(() => inputValidator.validateInputTypeNumber('string')).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(NaN)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(null)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(undefined)).toThrowError('Input must be a number')
})

// Test case to check input type string validation
test('Validate input type string', () => {
  expect(() => inputValidator.validateInputTypeString(1)).toThrowError('Input must be a string')

  expect(() => inputValidator.validateInputTypeString([])).toThrowError('Input must be a string')

  expect(() => inputValidator.validateInputTypeString(undefined)).toThrowError('Input must be a string')
})

// Test case to check input type array validation
test('Validate input type array', () => {
  expect(() => inputValidator.validateInputTypeArray(1)).toThrowError('Input must be an array')

  expect(() => inputValidator.validateInputTypeArray('string')).toThrowError('Input must be an array')

  expect(() => inputValidator.validateInputTypeArray(undefined)).toThrowError('Input must be an array')

  expect(() => inputValidator.validateInputTypeArray({})).toThrowError('Input must be an array')
})

// Test case to check positive number validation
test('Validate positive number', () => {
  expect(() => inputValidator.validatePositiveNumber(-1)).toThrowError('Number must be positive')
})

// Test case to check Celsius temperature range validation
test('Validate Celsius temperature range', () => {
  expect(() => inputValidator.validateCelsiusRange(-300)).toThrowError('Temperature must be greater than or equal to -273.15°C')
})

// Test case to check Fahrenheit temperature range validation
test('Validate Fahrenheit temperature range', () => {
  expect(() => inputValidator.validateFahrenheitRange(-500)).toThrowError('Temperature must be greater than or equal to -459.67°F')
})
