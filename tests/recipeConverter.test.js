/**
 * Tests for the RecipeConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { RecipeConverter } from '../src/components/recipeConverter/recipeConverter.js'

const recipeConverter = new RecipeConverter()

// Test to check single ingredient conversion
test('Convert Single Ingredient', () => {
  const ingredient = { ingredient: 'Sugar', amount: '1', unit: 'cup' }
  const converted = recipeConverter.convertIngredientValues([ingredient])

  expect(converted).toHaveLength(1)
  expect(converted[0]).toEqual({
    ingredient: 'Sugar',
    amount: 2.37,
    unit: 'dl'
  })
})

// Test to check multiple ingredients conversion
test('Convert Multiple Ingredients', () => {
  const ingredients = [
    { ingredient: 'Flour', amount: '2', unit: 'cup' },
    { ingredient: 'Butter', amount: '100', unit: 'g' },
    { ingredient: 'Milk', amount: '1', unit: 'l' }
  ]
  const converted = recipeConverter.convertIngredientValues(ingredients)

  expect(converted).toHaveLength(3)
  expect(converted).toEqual([
    { ingredient: 'Flour', amount: 4.73, unit: 'dl' },
    { ingredient: 'Butter', amount: 3.53, unit: 'oz' },
    { ingredient: 'Milk', amount: 2.11, unit: 'pt' }
  ])
})

// Test to check ingredient with no conversion available
test('Convert Ingredient with No Conversion Available', () => {
  const ingredient = { ingredient: 'Salt', amount: '1', unit: 'pinch' }
  const converted = recipeConverter.convertIngredientValues([ingredient])

  expect(converted).toHaveLength(1)
  expect(converted[0]).toEqual(ingredient)
})

// Test to check ingredient with no amount
test('Convert Ingredient with No Amount', () => {
  const ingredient = { ingredient: 'Pepper', amount: '', unit: 'to taste' }
  const converted = recipeConverter.convertIngredientValues([ingredient])

  expect(converted).toHaveLength(1)
  expect(converted[0]).toEqual(ingredient)
})

// Test to check ingredient with no amount or unit
test('Convert Ingredient with No Amount or Unit', () => {
  const ingredient = { ingredient: 'Water', amount: '', unit: '' }
  const converted = recipeConverter.convertIngredientValues([ingredient])

  expect(converted).toHaveLength(1)
  expect(converted[0]).toEqual(ingredient)
})
