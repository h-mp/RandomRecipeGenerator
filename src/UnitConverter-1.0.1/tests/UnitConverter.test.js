/**
 * Tests for the UnitConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { UnitConverter } from '../src/UnitConverter'

const unitConverter = new UnitConverter()

// Test cases for temperature conversion

// Test case to check temperature conversion
test('Check temperature conversion', () => {
  expect(unitConverter.convertTemperature('fahrenheit', 'celsius', 32)).toBe(0)

  expect(unitConverter.convertTemperature('Celsius', 'Fahrenheit', 0)).toBe(32)

  expect(unitConverter.convertTemperature('f', 'c', -40)).toBe(-40)

  expect(unitConverter.convertTemperature('C', 'F', -40)).toBe(-40)

  expect(() => unitConverter.convertTemperature('kelvin', 'celsius', 21)).toThrowError('Conversion not available')
})

// Test case to check input validation in temperature conversion
test('Check input validation in temperature conversion', () => {
  expect(() => unitConverter.convertTemperature('f', 'celsius', 'string')).toThrowError('Input must be a number')

  expect(() => unitConverter.convertTemperature('f', 'celsius', NaN)).toThrowError('Input must be a number')

  expect(() => unitConverter.convertTemperature(2, 'celsius', 3)).toThrowError('Input must be a string')

  expect(() => unitConverter.convertTemperature('f', [], 3)).toThrowError('Input must be a string')
})

// Test cases for length conversion

// Test case to check length conversion
test('Check length conversion', () => {
  expect(unitConverter.convertLength('meters', 'feet', 2)).toBeCloseTo(6.561, 2)

  expect(unitConverter.convertLength('ft', 'm', 23)).toBeCloseTo(7.010, 2)

  expect(unitConverter.convertLength('cm', 'inches', 70)).toBeCloseTo(27.559, 2)

  expect(unitConverter.convertLength('in', 'centimeters', 9)).toBeCloseTo(22.86, 2)

  expect(() => unitConverter.convertLength('m', 'in', 21)).toThrowError('Conversion not available')
})

// Test case to check input validation in length conversion
test('Check input validation in length conversion', () => {
  expect(() => unitConverter.convertVolume('m', 'ft', -10)).toThrowError('Number must be positive')

  expect(() => unitConverter.convertLength('ft', 'm', 'string')).toThrowError('Input must be a number')

  expect(() => unitConverter.convertLength('ft', 'm', NaN)).toThrowError('Input must be a number')

  expect(() => unitConverter.convertLength(2, 'inches', 3)).toThrowError('Input must be a string')

  expect(() => unitConverter.convertLength('m', [], 3)).toThrowError('Input must be a string')
})

// Test cases for speed conversion

// Test case to check speed conversion
test('Check speed conversion', () => {
  expect(unitConverter.convertSpeed('mph', 'km/h', 60)).toBeCloseTo(96.56, 2)

  expect(unitConverter.convertSpeed('km/h', 'mph', 100)).toBeCloseTo(62.14, 2)

  expect(unitConverter.convertSpeed('fps', 'm/s', 60)).toBeCloseTo(18.288, 2)

  expect(unitConverter.convertSpeed('m/s', 'fps', 60)).toBeCloseTo(196.85, 2)

  expect(() => unitConverter.convertSpeed('mph', 'm/s', 60)).toThrowError('Conversion not available')
})

// Test case to check input validation in speed conversion
test('Check input validation in speed conversion', () => {
  expect(() => unitConverter.convertSpeed('mph', 'km/h', -20)).toThrowError('Number must be positive')

  expect(() => unitConverter.convertSpeed('mph', 'km/h', 'string')).toThrowError('Input must be a number')

  expect(() => unitConverter.convertSpeed('kmph', 'mi/h', NaN)).toThrowError('Input must be a number')

  expect(() => unitConverter.convertSpeed(2, 'fps', 3)).toThrowError('Input must be a string')

  expect(() => unitConverter.convertSpeed('m/s', [], 3)).toThrowError('Input must be a string')
})

// Test cases for weight conversion

// Test case to check weight conversion
test('Check weight conversion', () => {
  expect(unitConverter.convertWeight('kg', 'pounds', 2)).toBeCloseTo(4.409, 2)

  expect(unitConverter.convertWeight('lb', 'kilograms', 3)).toBeCloseTo(1.361, 2)

  expect(unitConverter.convertWeight('oz', 'grams', 28)).toBeCloseTo(793.786, 2)

  expect(unitConverter.convertWeight('g', 'ounces', 56)).toBeCloseTo(1.975, 2)

  expect(() => unitConverter.convertWeight('kg', 'oz', 12)).toThrowError('Conversion not available')
})

// Test case to check input validation in weight conversion
test('Check input validation in weight conversion', () => {
  expect(() => unitConverter.convertVolume('lb', 'kg', -10)).toThrowError('Number must be positive')

  expect(() => unitConverter.convertWeight('kg', 'pounds', 'string')).toThrowError('Input must be a number')

  expect(() => unitConverter.convertWeight('kg', 'lb', NaN)).toThrowError('Input must be a number')

  expect(() => unitConverter.convertWeight(2, 'g', 3)).toThrowError('Input must be a string')

  expect(() => unitConverter.convertWeight('oz', [], 3)).toThrowError('Input must be a string')
})

// Test cases for volume conversion

// Test case to check volume conversion
test('Check volume conversion', () => {
  expect(unitConverter.convertVolume('l', 'gallons', 2)).toBeCloseTo(0.528, 2)

  expect(unitConverter.convertVolume('gal', 'liters', 3)).toBeCloseTo(11.356, 2)

  expect(unitConverter.convertVolume('l', 'pints', 2)).toBeCloseTo(4.23, 2)

  expect(unitConverter.convertVolume('pt', 'liters', 3)).toBeCloseTo(1.42, 2)

  expect(unitConverter.convertVolume('dl', 'cups', 28)).toBeCloseTo(11.835, 2)

  expect(unitConverter.convertVolume('c', 'deciliters', 2)).toBeCloseTo(4.73, 2)

  expect(() => unitConverter.convertVolume('dl', 'l', 12)).toThrowError('Conversion not available')
})

// Test case to check input validation in volume conversion
test('Check input validation in volume conversion', () => {
  expect(() => unitConverter.convertVolume('l', 'gal', -10)).toThrowError('Number must be positive')

  expect(() => unitConverter.convertVolume('l', 'gal', 'string')).toThrowError('Input must be a number')

  expect(() => unitConverter.convertVolume('dl', 'cups', NaN)).toThrowError('Input must be a number')

  expect(() => unitConverter.convertVolume(2, 'l', 3)).toThrowError('Input must be a string')

  expect(() => unitConverter.convertVolume('pints', [], 3)).toThrowError('Input must be a string')
})

// Test cases for multiple value conversion

// Test case to check multiple temperature value conversion
test('Check multiple temperature value conversion', () => {
  const result = unitConverter.convertMultipleValues('temperature', 'f', 'c', [32, 0, -40])
  const expected = [0, -17.778, -40]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple length value conversion
test('Check multiple length value conversion', () => {
  const result = unitConverter.convertMultipleValues('length', 'm', 'ft', [2, 23, 28])
  const expected = [6.561, 75.459, 91.863]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple weight value conversion
test('Check multiple weight value conversion', () => {
  const result = unitConverter.convertMultipleValues('weight', 'kg', 'pounds', [2, 3, 28])
  const expected = [4.409, 6.614, 61.729]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple volume value conversion
test('Check multiple volume value conversion', () => {
  const result = unitConverter.convertMultipleValues('volume', 'l', 'gallons', [2, 13, 28])
  const expected = [0.528, 3.434, 7.396]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple value conversion input validation
test('Check multiple value conversion input validation', () => {
  expect(() => unitConverter.convertMultipleValues('temperature', 2, 'c', [32, 0, -40])).toThrowError('Input must be a string')

  expect(() => unitConverter.convertMultipleValues('temperature', 'f', [], [32, 0, -40])).toThrowError('Input must be a string')

  expect(() => unitConverter.convertMultipleValues(12, 'f', 'c', [32, 0, -40])).toThrowError('Input must be a string')

  expect(() => unitConverter.convertMultipleValues('temperature', 'f', 'c', 'string')).toThrowError('Input must be an array')

  expect(() => unitConverter.convertMultipleValues('something', 'f', 'c', [32, 0, 40])).toThrowError('Conversion not available')
})

// Test case to check conversion with summary
test('Check conversion with summary', () => {
  const result = unitConverter.convertWithSummary('temperature', 'f', 'c', 32)
  const expected = { 
    conversionType: 'temperature',
    convertFrom: 'f',
    convertTo: 'c',
    numberToConvert: 32,
    convertedNumber: 0
   }
  expect(result).toEqual(expected)
})

// Test case to check conversion with rounding up
test('Check conversion with rounding up', () => {
  expect(unitConverter.convertAndRoundUp('temperature', 'f', 'c', 45, 2)).toBe(7.22)

  expect(unitConverter.convertAndRoundUp('length', 'm', 'ft', 2, 2)).toBe(6.56)

  expect(unitConverter.convertAndRoundUp('weight', 'kg', 'pounds', 2, 3)).toBe(4.409)
})