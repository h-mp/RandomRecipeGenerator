/**
 * Class representing an API handler for fetching recipe data.
 */
export class ApiHandler {
  /**
   * The base URL of the API.
   */
  #baseURL
  
  constructor(baseURL) {
    this.#baseURL = baseURL
  }

  /**
   * Fetches the information of a random recipe from the API.
   * 
   * @returns {Object} - The JSON response containing a random recipe's information.
   */
  async fetchRandomRecipe() {
    try {
      const apiUrl = `${this.#baseURL}/random.php`
      const data = await this.#fetchFromApi(apiUrl)

      return data.meals[0]
    } catch (error) {
      throw new Error("Failed to fetch recipe from API")
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
