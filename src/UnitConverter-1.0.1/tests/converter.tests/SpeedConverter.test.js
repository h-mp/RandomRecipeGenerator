/**
 * Tests for the SpeedConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { SpeedConverter } from '../../src/converters/speed/SpeedConverter'

const speedConverter = new SpeedConverter()

// Test case to check miles per hour to kilometers per hour conversion
test('Convert miles per hour to kilometers per hour', () => {
  expect(speedConverter.convert('miles per hour', 'kilometers per hour', 100)).toBeCloseTo(160.93, 2)

  expect(speedConverter.convert('mph', 'km/h', 200)).toBeCloseTo(321.87, 2)
})

// Test case to check kilometers per hour to miles per hour conversion
test('Convert kilometers per hour to miles per hour', () => {
  expect(speedConverter.convert('kilometers per hour', 'miles per hour', 100)).toBeCloseTo(62.137, 2)

  expect(speedConverter.convert('km/h', 'mph', 200)).toBeCloseTo(124.274, 2)
})

// Test case to check feet per second to meters per second conversion
test('Convert feet per second to meters per second', () => {
  expect(speedConverter.convert('feet per second', 'meters per second', 60)).toBeCloseTo(18.29, 2)

  expect(speedConverter.convert('fps', 'm/s', 100)).toBeCloseTo(30.48, 2)
})

// Test case to check meters per second to feet per second conversion
test('Convert meters per second to feet per second', () => {
  expect(speedConverter.convert('meters per second', 'feet per second', 100)).toBeCloseTo(328.08, 2)

  expect(speedConverter.convert('m/s', 'fps', 50)).toBeCloseTo(164.04, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => speedConverter.convert('miles per hour', 'kilometers per hour', 'string')).toThrowError('Input must be a number')

  expect(() => speedConverter.convert('miles per hour', 'kilometers per hour', NaN)).toThrowError('Input must be a number')

  expect(() => speedConverter.convert('mph', 'kilometers per hour', -3)).toThrowError('Number must be positive')
})
