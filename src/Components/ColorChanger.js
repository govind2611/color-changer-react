import React, { useState } from 'react';
import "./color.css"

const ColorChanger = () => {
  const [color, setColor] = useState('red');
  const changeColor = () => {
    const newColor = color === 'red' ? 'blue' : 'red';
    setColor(newColor);
  };

  return (
    <div className="container">
      <h1 className="title">Color Changer</h1>
      <div
        className="box"
        style={{ backgroundColor: color }}
      ></div>
      <button className="btn" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ColorChanger;
