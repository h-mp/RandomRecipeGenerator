/**
 * Template for the Recipe-application Web Component.
 * 
 * @version 1.0.0
 */

export const recipeApplicationTemplate = document.createElement('template')
recipeApplicationTemplate.innerHTML = `
<style>
  #recipeAppContainer {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    color: #2F4F4F;
  }

  h1 {
    font-size: 36px;
    text-align: center;
  }
  
  p {
    font-size: 20px;
    text-align: center;
  }

  .startButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }

  .recipeCardContainer {
    display: none;
  }

  #errorMessage {
    color: red;
    text-align: center;
    display: none;
    padding: 0px;
  }
</style>

<div id="recipeAppContainer">
  <h1>Random Recipe Generator</h1>
  <p>Click the button below to fetch a random recipe!</p>
  <div class="startButtonContainer">
  </div>
  <p id="errorMessage"></p>
  <div class="recipeCardContainer">
  </div>
</div>
`