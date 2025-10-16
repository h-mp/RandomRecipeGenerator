/**
 * Tests for the RecipeFormulator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { RecipeFormulator } from "../src/components/recipeFormulator/recipeFormulator";

const recipeFormulator = new RecipeFormulator()

const testRecipe = {
  strMeal: "Test Meal",
  strMealThumb: "https://www.example.com/image.jpg",
  strArea: "Test Area",
  strInstructions: "Step 1. Do something.\nStep 2. Do something else.\nStep 3. Finish up.",
  strIngredient1: "Ingredient 1",
  strMeasure1: "1 cup",
  strIngredient2: "Ingredient 2",
  strMeasure2: "200 g",
  strIngredient3: "Ingredient 3",
  strMeasure3: "3 tbsp",
  strIngredient4: "",
  strMeasure4: "",
  strIngredient5: null,
  strMeasure5: null,
  strIngredient6: "Ingredient 6",
  strMeasure6: "",
}

// Test to check formulation of the recipe from raw data
test('Formulate Recipe Instructions - Normal Case', () => {
  const formulatedRecipe = recipeFormulator.formulateRecipeData(testRecipe)

  expect(formulatedRecipe).toHaveProperty('name', 'Test Meal')
  expect(formulatedRecipe).toHaveProperty('imageSrc', 'https://www.example.com/image.jpg')
  expect(formulatedRecipe).toHaveProperty('imageAlt', 'Test Meal')
  expect(formulatedRecipe).toHaveProperty('origin', 'Test Area')
  expect(formulatedRecipe).toHaveProperty('ingredients')
  expect(Array.isArray(formulatedRecipe.ingredients)).toBe(true)
  expect(formulatedRecipe.ingredients.length).toBe(4)
  expect(formulatedRecipe).toHaveProperty('instructions')
  expect(Array.isArray(formulatedRecipe.instructions)).toBe(true)
  expect(formulatedRecipe.instructions.length).toBe(3)
})

// Test to check formulation of the recipe with no data
test('Formulate Recipe Instructions - No Data', () => {
  expect(() => {
    recipeFormulator.formulateRecipeData(null)
  }).toThrow("No data provided to formulate")
})

// Test to check formulation of the recipe with missing instructions
test('Formulate Recipe Instructions - Missing Instructions', () => {
  const recipeWithNoInstructions = { ...testRecipe, strInstructions: null }
  const formulatedRecipe = recipeFormulator.formulateRecipeData(recipeWithNoInstructions)

  expect(formulatedRecipe).toHaveProperty('instructions')
  expect(Array.isArray(formulatedRecipe.instructions)).toBe(true)
  expect(formulatedRecipe.instructions.length).toBe(1)
  expect(formulatedRecipe.instructions[0]).toBe('No instructions provided.')
})

// Test to check formulation of the recipe with mixed number amounts
test('Formulate Recipe Instructions - Mixed Number Amounts', () => {
  const recipeWithMixedAmounts = { ...testRecipe }
  recipeWithMixedAmounts.strMeasure1 = "1 1/2 cup"
  recipeWithMixedAmounts.strMeasure2 = "3/4 l"
  const formulatedRecipe = recipeFormulator.formulateRecipeData(recipeWithMixedAmounts)

  expect(formulatedRecipe).toHaveProperty('ingredients')
  expect(Array.isArray(formulatedRecipe.ingredients)).toBe(true)
  expect(formulatedRecipe.ingredients.length).toBe(4)
  expect(formulatedRecipe.ingredients[0]).toEqual({
    ingredient: 'Ingredient 1',
    amount: 1.5,
    unit: 'cup'
  })
  expect(formulatedRecipe.ingredients[1]).toEqual({
    ingredient: 'Ingredient 2',
    amount: 0.75,
    unit: 'l'
  })
})

// Test to check formulation of the recipe with fraction amounts
test('Formulate Recipe Instructions - Fraction Amounts', () => {
  const recipeWithFractionAmounts = { ...testRecipe }
  recipeWithFractionAmounts.strMeasure1 = "1/4 cup"
  recipeWithFractionAmounts.strMeasure2 = "2/5 tbsp"
  const formulatedRecipe = recipeFormulator.formulateRecipeData(recipeWithFractionAmounts)

  expect(formulatedRecipe).toHaveProperty('ingredients')
  expect(Array.isArray(formulatedRecipe.ingredients)).toBe(true)
  expect(formulatedRecipe.ingredients.length).toBe(4)
  expect(formulatedRecipe.ingredients[0]).toEqual({
    ingredient: 'Ingredient 1',
    amount: 0.25,
    unit: 'cup'
  })
  expect(formulatedRecipe.ingredients[1]).toEqual({
    ingredient: 'Ingredient 2',
    amount: 0.4,
    unit: 'tbsp'
  })
})