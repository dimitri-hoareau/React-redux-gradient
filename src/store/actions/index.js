// Je souhaite mettre en dur les différents types d'action

// TYPES
export const RAND_FIRST = "RAND_FIRST";
export const RAND_LAST = "RAND_LAST";
export const TO_LEFT = "TO_LEFT";
export const TO_RIGHT = "TO_RIGHT";

// ACTION CREATOR
// Une fonction dont le job
// est de me renvoyer (return)
// Un objet d'action correctement formatté

export const randFirst = (color) => ({
  type: RAND_FIRST,
  color: color,
  // color,
});
