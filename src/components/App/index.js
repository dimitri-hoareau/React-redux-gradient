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
