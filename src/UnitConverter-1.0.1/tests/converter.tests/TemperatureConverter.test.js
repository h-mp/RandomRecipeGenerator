/**
 * Tests for the TemperatureConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { TemperatureConverter } from '../../src/converters/temperature/TemperatureConverter'

const temperatureConverter = new TemperatureConverter()

// Test case to check Fahrenheit to Celsius conversion
test('Convert Fahrenheit to Celsius', () => {
  expect(temperatureConverter.convert('fahrenheit', 'celsius', 32)).toBe(0)

  expect(temperatureConverter.convert('Fahrenheit', 'Celsius', 212)).toBe(100)
})

// Test case to check Celsius to Fahrenheit conversion
test('Convert Celsius to Fahrenheit', () => {
  expect(temperatureConverter.convert('celsius', 'fahrenheit', 0)).toBe(32)

  expect(temperatureConverter.convert('Celsius', 'Fahrenheit', -40)).toBe(-40)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => temperatureConverter.convert('fahrenheit', 'celsius', 'string')).toThrowError('Input must be a number')

  expect(() => temperatureConverter.convert('fahrenheit', 'celsius', NaN)).toThrowError('Input must be a number')
})
