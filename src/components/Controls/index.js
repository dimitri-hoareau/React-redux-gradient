/* eslint-disable react/button-has-type */
import React from 'react';

/*
 Props:
 - randFirst (func)
 - randLast (func)
*/

const Controls = () => (
  <div className="buttons group">
    <button className="button" id="randFirst">
      Random First
    </button>
    <button className="button" id="randAll">
      Random All
    </button>
    <button className="button" id="randLast">
      Random Last
    </button>
  </div>
);

export default Controls;
