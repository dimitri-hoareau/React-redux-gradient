// Je souhaite mettre en dur les différents types d'action
// Ces types d'action me seront utiles à 2 endroits (minimum)
// 1. Dans les action Creators
// 2. Dans le reducer, qui réagi justement aux types d'action
// pour savoir quoi modifier dans le state

// TYPES
export const RAND_FIRST = 'RAND_FIRST';
export const RAND_LAST = 'RAND_LAST';
export const TO_DIRECTION = 'TO_DIRECTION';
// ACTION CREATOR
// Une fonction dont le job
// est de me renvoyer (return)
// Un objet d'action correctement formaté
// Ces fonctions seront utilisés là où, dans
// votre code vous souhaitez déclencher une action

export const toDirection = (value) => ({
  type: TO_DIRECTION,
  value,
});

export const randFirst = (color) => ({
  type: RAND_FIRST,
  // color: color,
  color,
});

export const randLast = (color) => ({
  type: RAND_LAST,
  color,
});
