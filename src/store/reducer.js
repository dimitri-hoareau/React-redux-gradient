// J'importe les ACTION TYPES pour lesquels je veux déclencher un changement
// de state dans mon reducer
import { RAND_FIRST, RAND_LAST, TO_LEFT, TO_RIGHT } from './actions';

// Je définis un state initial pour mon app
const stateInitial = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// Mon reducer sera appelé à de multiples occasions.

// Une première fois, sans recevoir aucun paramètre
// pour connaitre mon state initial. C'est pour cela
// que je donne en valeur de paramètre par défaut
// mon stateInitial. (même chose pour l'action, je mets
// un objet vide car je ne peux pas faire de undefined.type)

const reducer = (state = stateInitial, action = {}) => {
  // J'examine, pour chaque action, son type.
  // En fonction du type d'action, je renvoie
  // soit un state modifié, soit le state que je
  // reçois en paramètres
  switch (action.type) {
    case TO_LEFT:
      return {
        ...state,
        direction: '270deg',
      };
    case TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case RAND_FIRST:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case RAND_LAST:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};

export default reducer;
