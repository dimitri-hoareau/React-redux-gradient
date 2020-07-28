/* eslint-disable react/button-has-type */
import React from 'react';

/*
Props:

- text (ex: toLeft, toRight, to45)
- onClick (func)

*/

const DirectionButton = ({ text, toDirection }) => (
  <button onClick={toDirection} className="button" id="toLeft">
    {text}
  </button>
);

export default DirectionButton;
