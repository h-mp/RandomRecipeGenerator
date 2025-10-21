/**
 * The API Handler class.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.0.0
 */

export class ApiHandler {
  /**
   * The base URL of the API.
   */
  #baseURL

  /**
   * The endpoint for fetching a random recipe.
   */
  #randomRecipeEndpoint
  
  constructor(baseURL) {
    this.#baseURL = baseURL
    this.#randomRecipeEndpoint = '/random.php'
  }

  /**
   * Fetches the information of a random recipe from the API.
   * 
   * @returns {Object} - The JSON response containing a random recipe's information.
   */
  async fetchRandomRecipe() {
    try {
      const apiUrl = `${this.#baseURL}${this.#randomRecipeEndpoint}`
      const data = await this.#fetchFromApi(apiUrl)

      return data.meals[0]
    } catch (error) {
      throw new Error("Failed to fetch data from API")
    }
  }

  /**
   * Fetches data from the specified API endpoint and returns the JSON response.
   * 
   * @param {String} apiUrl - The URL of the API endpoint to fetch data from.
   * @returns {Object} - The JSON response from the API.
   */
  async #fetchFromApi (apiUrl) {
    try {
      const response = await fetch (`${apiUrl}`)
    
      return response.json()
    } catch (error) {
      throw new Error("Failed to fetch data from API")
    }
  }
}
