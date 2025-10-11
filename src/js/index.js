/**
 * The main script file of the application.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

import '../components/recipe-application/recipe-application.js'

try {
  const recipeAppContainer = document.querySelector('#recipeApp')
  const recipeApp = document.createElement('recipe-application')
  recipeAppContainer.appendChild(recipeApp)
} catch (error) {
  console.error(error.message)
}