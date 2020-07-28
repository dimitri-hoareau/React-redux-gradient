import React from 'react';
import { useSelector } from 'react-redux';
/* props attendus :
 - firstColor
 - lastColor
 - direction
*/

const Colors = () => {
  const { firstColor, lastColor } = useSelector((state) => state);
  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>→
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
};
export default Colors;
