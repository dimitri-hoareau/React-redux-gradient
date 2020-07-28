/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import NbColors from '../../container/NbColors';
import Controls from '../../container/Controls';
import Colors from '../Colors';
import Gradient from '../../container/Gradient';
import DirectionButton from '../../container/DirectionButton';

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
      <DirectionButton direction={270} text="to left" />
      <DirectionButton direction={45} text="to 45" />
      <DirectionButton direction={135} text="to 135" />
      <DirectionButton direction={225} text="to 225" />
      <DirectionButton direction={315} text="to 315" />
      <DirectionButton direction={90} text="to right" />
    </div>
  </div>
);

// == Export
export default App;
