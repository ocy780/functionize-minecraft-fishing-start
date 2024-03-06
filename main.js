// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  
  if (character === "steve") {
    fishCatch(70, 20, 5);
  } else if (character === "alex") {
    fishCatch(10, 10, 30);
  } else if (character === "villager") {
    fishCatch(25, 25, 25);
}

  function fishCatch(Cod1, Salmon1, Tropical1) {
    let randNum = Math.random();

    if (randNum < Cod1 / 100) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = "img/Raw-cod.png";
    } else if (randNum < (Salmon1 + Cod1) / 100) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = "img/Raw-Salmon.png";
    } else if (randNum < (Tropical1 + Salmon1 + Cod1) / 100) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = "img/Pufferfish.png";
    }
  }
}  