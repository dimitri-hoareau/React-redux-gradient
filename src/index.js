// == Imports
import { randomHexColor, generateSpanColor } from "./utils";
import store from "./store";

// == Rendu dans le DOM
function renderNbColors() {
  const state = store.getState();
  const { nbColors } = state;

  document.getElementById("nbColors").innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  document.getElementById("gradient").style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result =
    direction === "90deg"
      ? `${firstSpan} → ${lastSpan}`
      : `${lastSpan} ← ${firstSpan}`;

  document.getElementById("colors").innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById("randAll").addEventListener("click", () => {
  // debug
  console.log("Random all colors");
  store.dispatch({
    type: "RAND_FIRST",
    color: randomHexColor(),
  });
  store.dispatch({
    type: "RAND_LAST",
    color: randomHexColor(),
  });
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("randFirst").addEventListener("click", () => {
  // state.nbColors += 1;
  // state.firstColor = randomHexColor();
  store.dispatch({
    type: "RAND_FIRST",
    color: randomHexColor(),
  });
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("randLast").addEventListener("click", () => {
  store.dispatch({
    type: "RAND_LAST",
    color: randomHexColor(),
  });
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("toLeft").addEventListener("click", () => {
  // state.direction = "270deg";
  renderGradient();
  renderColors();
});

document.getElementById("toRight").addEventListener("click", () => {
  // state.direction = "90deg";
  renderGradient();
  renderColors();
});
