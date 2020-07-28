import React from 'react';
import { useSelector } from 'react-redux';
/*
Props
- nbreColors: (number)
*/
const NbColors = () => {
  // Le hook useSelector attend une fonction en argument
  // Cette fonction va recevoir le state
  const nbreColors = useSelector((state) => state.nbColors);
  return <div id="nbColors">{nbreColors} couleur(s) générée(s) </div>;
};

export default NbColors;
