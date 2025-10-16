export const customButtonTemplate = document.createElement('template')
customButtonTemplate.innerHTML = `
<style>
  button {
    height: 40px;
    width: 200px;
    background-color: #2F4F4F;
    color: #FFEBCD;
    font-size: 20px;
    box-shadow: 0px 5px 5px rgba(53, 53, 53, 0.32);
    border-radius: 12px;
  }

  button:hover {
    cursor: pointer;
    transform: translateY(2px);
    box-shadow: 0 2px 2px rgba(0,0,0,0.25);
  }
</style>

<div class="buttonContainer">
  <button type="button" class="btn">
    <span class="spanText">Click</span>
  </button>
</div>
`