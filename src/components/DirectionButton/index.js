/* eslint-disable react/button-has-type */
import React from 'react';

/*
Props:

- text (ex: toLeft, toRight, to45)
- onClick (func)

*/

const DirectionButton = ({ text, toDirection, direction }) => (
  <button
    onClick={() => {
      toDirection(direction);
    }}
    className="button"
    id="toLeft"
  >
    {text}
  </button>
);

export default DirectionButton;
