/**
 * The API Handler class.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

export class ApiHandler {
  #apiBaseURL
  #randomRecipeEndpoint
  
  constructor(apiBaseURL) {
    this.#apiBaseURL = apiBaseURL
    this.#randomRecipeEndpoint = '/random.php'
  }

  async fetchRandomRecipe() {
    try {
      const apiUrl = `${this.#apiBaseURL}${this.#randomRecipeEndpoint}`
      const recipeData = await this.#fetchFromApi(apiUrl)

      return recipeData.meals[0]
    } catch (error) {
      throw new Error("Failed to fetch data from API")
    }
  }

  async #fetchFromApi (apiUrl) {
    try {
      const response = await fetch (`${apiUrl}`)
    
      return response.json()
    } catch (error) {
      throw new Error("Failed to fetch data from API")
    }
  }
}
