// == Imports
import { randomHexColor, generateSpanColor } from "./utils";
import store from "./store";
import { randFirst } from "./store/actions";

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

const updateDom = () => {
  renderNbColors();
  renderGradient();
  renderColors();
};

// == Initialisation
updateDom();

// Je souhaite appeler updateDOM dés que mon state
// a été mis à jour
store.subscribe(updateDom);

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
});

document.getElementById("randFirst").addEventListener("click", () => {
  // state.nbColors += 1;
  // state.firstColor = randomHexColor();
  store.dispatch(randFirst(randomHexColor()));
});

document.getElementById("randLast").addEventListener("click", () => {
  store.dispatch({
    type: "RAND_LAST",
    color: randomHexColor(),
  });
});

document.getElementById("toLeft").addEventListener("click", () => {
  // state.direction = "270deg";
});
document.getElementById("toRight").addEventListener("click", () => {
  // state.direction = "90deg";
});
