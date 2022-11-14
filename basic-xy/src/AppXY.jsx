import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // setXy({ x: e.clientX, y: e.clientY });
    // 만약 수평으로만 이동이 가능하다면?
    setXy((prev) => ({ x: e.clientX, y: prev.y }));
  };

  return (
    <div className='container' onMouseMove={(e) => handleMouseMove(e)}>
      <div className='pointer' style={{ position: 'absolute', left: xy.x, top: xy.y }} />
    </div>
  );
}
