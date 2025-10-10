export const recipeCardTemplate = document.createElement('template')
recipeCardTemplate.innerHTML = `
<style>
  .recipeInstructions {
    list-style-type: number;
  }
  .recipeInstructions li, .recipeIngredients li {
    margin-bottom: 3px;
  }
  .recipeIngredients {
    list-style-type: disc;
  }
</style>

<div class="recipeCardContainer">
  <div class="recipeCard">
    <h2 class="recipeTitle">Recipe Title</h2>
    <img class="recipeImage" src="" alt="Dish Image">
    <p class="recipeOrigin">Origin: </p>
    <h2>Ingredients:</h2>
    <ul class="recipeIngredients">
    </ul>
    <div class="customButtonContainer">
    </div>
    <h2>Instructions:</h2>
    <ul class="recipeInstructions">
    </ul>
  </div>
</div>
`