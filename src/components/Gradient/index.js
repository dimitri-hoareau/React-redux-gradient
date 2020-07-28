import React from 'react';
/*
Props
- firstColor
- lastColor
- Direction
*/
const Gradient = (props) => {
  const { firstColor, lastColor, direction } = props;
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
