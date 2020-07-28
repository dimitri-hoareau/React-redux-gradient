/* eslint-disable react/button-has-type */
import React from 'react';
/*
 Props:
 - randFirst (func)
 - randLast (func)
*/

const Controls = ({ randFirst, randLast }) => (
  <div className="buttons group">
    <button
      className="button"
      id="randFirst"
      onClick={() => {
        randFirst();
      }}
    >
      Random First
    </button>
    <button
      className="button"
      id="randAll"
      onClick={() => {
        randFirst();
        randLast();
      }}
    >
      Random All
    </button>
    <button
      className="button"
      id="randLast"
      onClick={() => {
        randLast();
      }}
    >
      Random Last
    </button>
  </div>
);
export default Controls;
