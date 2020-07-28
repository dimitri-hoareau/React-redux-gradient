/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { randomHexColor } from '../../utils';
import { randFirst } from '../../store/actions';
/*
 Props:
 - randFirst (func)
 - randLast (func)
*/

const Controls = () => {
  // useDispatch me return la fonction
  // store.dispatch. Je récupère donc cette
  // fonction dans la variable de mon choix
  // pour pouvoir l'utiliser et dispatcher des actions
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        className="button"
        id="randFirst"
        onClick={() => {
          dispatch(randFirst(randomHexColor()));
        }}
      >
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
};
export default Controls;
