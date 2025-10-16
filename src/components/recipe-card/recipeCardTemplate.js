export const recipeCardTemplate = document.createElement('template')
recipeCardTemplate.innerHTML = `
<style>
  .recipeCardContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }

  .recipeCard {
    max-width: 800px;
    width: 100%;
    background-color: #afcfcf;
    border: 1px solid #2F4F4F;
    border-radius: 12px;
    padding: 30px;
  }

  .recipeTitle {
    font-size: 30px;
    color: #2F4F4F;
    text-align: center;
  }

  h2, .customButtonContainer {
    padding-left: 10px;
  }

  h2 {
    font-size: 24px;
  }

  .recipeImage {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    border-radius: 12px;
    margin: 20px 0;
  }

  .recipeInstructions {
    list-style-type: none;
    padding-left: 10px;
  }

  .recipeInstructions li, .recipeIngredients li {
    margin-bottom: 8px;
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