/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import NbColors from '../NbColors';
import Controls from '../Controls';
import Colors from '../Colors';
import Gradient from '../Gradient';
import DirectionButton from '../DirectionButton';

// utiliser le state dans le composant Gradient
// (vous avec un exemple dans le composant NbColors)
// utliser dispatch dans le composant Controls

// == Composant
const App = () => (
  <div className="app">
    <NbColors />

    <Controls />

    <Colors />

    <Gradient />

    <div className="buttons group">
      <DirectionButton />
      <DirectionButton />
      <DirectionButton />
      <DirectionButton />
      <DirectionButton />
      <DirectionButton />
    </div>
  </div>
);

// == Export
export default App;
