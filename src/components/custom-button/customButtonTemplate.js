export const customButtonTemplate = document.createElement('template')
customButtonTemplate.innerHTML = `
<style>
button {
  height: 40px;
  width: 200px;
  color: black;
}
</style>

<div class="buttonContainer">
  <button type="button" class="btn" action="default">
    <span class="spanText">Click</span>
  </button>
</div>
`