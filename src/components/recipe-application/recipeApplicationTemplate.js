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
</style>

<div id="recipeAppContainer">
  <h1>Random Recipe Generator</h1>
  <p>Click the button below to fetch a random recipe!</p>
  <div class="startButtonContainer">
 </div>
  <div class="recipeCardContainer">
  </div>
</div>
`