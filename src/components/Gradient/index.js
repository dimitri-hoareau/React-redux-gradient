import React from 'react';
import { useSelector } from 'react-redux';
/*
Props
- firstColor
- lastColor
- Direction
*/
const Gradient = () => {
  const { firstColor, lastColor, direction } = useSelector((state) => state);
  // const firstColor = useSelector((state) => state.firstColor);
  // const lastColor = useSelector((state) => state.lastColor);
  // const direction = useSelector((state) => state.direction);
  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  );
};
export default Gradient;
