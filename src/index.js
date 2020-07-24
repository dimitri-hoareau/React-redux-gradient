// == Imports
import { randomHexColor, generateSpanColor } from './utils';
import store from './store';
import { randFirst, randLast, toLeft, toRight } from './store/actions';

// == Rendu dans le DOM
function renderNbColors() {
  // J'appelle store.getState dans chacune de mes fonctions
  // comme ça, à chaque fois que ma fonction est exécutée
  // j'obtiens la dernière version de mon state
  const state = store.getState();
  const { nbColors } = state;

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result =
    direction === '90deg'
      ? `${firstSpan} → ${lastSpan}`
      : `${lastSpan} ← ${firstSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// Je crée une fonction qui met à jour le DOM
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
document.getElementById('randAll').addEventListener('click', () => {
  // debug
  // Je dispatch les actions à l'aide du store.
  // Et au lieu de fournir un objet d'action "à la mano"
  // J'utilise les action creators (functions) et ces
  // action creators se chargeront pour moi de générer
  // un objet d'action formatté correctement
  store.dispatch(randFirst(randomHexColor()));
  store.dispatch(randLast(randomHexColor()));
});

document.getElementById('randFirst').addEventListener('click', () => {
  // state.nbColors += 1;
  // state.firstColor = randomHexColor();
  store.dispatch(randFirst(randomHexColor()));
});

document.getElementById('randLast').addEventListener('click', () => {
  store.dispatch(randLast(randomHexColor()));
});

document.getElementById('toLeft').addEventListener('click', () => {
  // state.direction = "270deg";
  store.dispatch(toLeft());
});
document.getElementById('toRight').addEventListener('click', () => {
  // state.direction = "90deg";
  store.dispatch(toRight());
});
