/**
 * Tests for the ApiHandler class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ApiHandler } from '../src/components/classes/apiHandler/apiHandler.js'
import { jest } from '@jest/globals'

const apiHandler = new ApiHandler('https://www.themealdb.com/api/json/v1/1')

// Test to check fetching a random recipe from the API
test('Fetch Random Recipe',async () => {
  const recipe = await apiHandler.fetchRandomRecipe()

  expect(typeof recipe).toBe('object');
  expect(recipe).toHaveProperty('strMeal');
  expect(recipe).toHaveProperty('strInstructions');
  expect(recipe).toHaveProperty('strIngredient1');
  expect(recipe).toHaveProperty('strMeasure1');
  expect(recipe).toHaveProperty('strMealThumb');
  expect(recipe).toHaveProperty('strArea');
})

// Test to check error handling when the API URL is invalid
test('Fetch Random Recipe - Invalid URL', async () => {
  const invalidApiHandler = new ApiHandler('https://www.invalidurl.com/api')
  
  await expect(invalidApiHandler.fetchRandomRecipe()).rejects.toThrow("Failed to fetch data from API")
})

// Test to check error handling when the API returns errors
test('Fetch Random Recipe - API error', async () => {
  // Mock the fetch function to simulate a network error
  global.fetch = jest.fn(() => Promise.reject(new Error('Network error')))
  
  await expect(apiHandler.fetchRandomRecipe()).rejects.toThrow("Failed to fetch data from API")
})