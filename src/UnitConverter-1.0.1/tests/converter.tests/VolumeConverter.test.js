/**
 * Tests for the VolumeConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { VolumeConverter } from '../../src/converters/volume/VolumeConverter'

const volumeConverter = new VolumeConverter()

// Test case to check gallons to liters conversion
test('Convert gallons to liters', () => {
  expect(volumeConverter.convert('gallons', 'liters', 5)).toBeCloseTo(18.927, 2)

  expect(volumeConverter.convert('gal', 'l', 3.5)).toBeCloseTo(13.248, 2)
})

// Test case to check liters to gallons conversion
test('Convert liters to gallons', () => {
  expect(volumeConverter.convert('liters', 'gallons', 9.2)).toBeCloseTo(2.430, 2)

  expect(volumeConverter.convert('l', 'gal', 4.6)).toBeCloseTo(1.215, 2)
})

// Test case to check pints to liters conversion
test('Convert pints to liters', () => {
  expect(volumeConverter.convert('pints', 'liters', 12.9)).toBeCloseTo(6.103, 2)

  expect(volumeConverter.convert('pt', 'l', 4.6)).toBeCloseTo(2.177, 2)
})

// Test case to check liters to pints conversion
test('Convert liters to pints', () => {
  expect(volumeConverter.convert('liters', 'pints', 4.6)).toBeCloseTo(9.721, 2)

  expect(volumeConverter.convert('l', 'pt', 2.3)).toBeCloseTo(4.862, 2)
})

// Test case to check cups to deciliters conversion
test('Convert cups to deciliters', () => {
  expect(volumeConverter.convert('cups', 'deciliters', 8.1)).toBeCloseTo(19.163, 2)

  expect(volumeConverter.convert('c', 'dl', 5.7)).toBeCloseTo(13.485, 2)
})

// Test case to check deciliters to cups conversion
test('Convert deciliters to cups', () => {
  expect(volumeConverter.convert('deciliters', 'cups', 22.7)).toBeCloseTo(9.594, 2)

  expect(volumeConverter.convert('dl', 'c', 3.5)).toBeCloseTo(1.479, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => volumeConverter.convert('gallons', 'liters', 'string')).toThrowError('Input must be a number')

  expect(() => volumeConverter.convert('gallons', 'liters', NaN)).toThrowError('Input must be a number')

  expect(() => volumeConverter.convert('gal', 'l', -3)).toThrowError('Number must be positive')
})
