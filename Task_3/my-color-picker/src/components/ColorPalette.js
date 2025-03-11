import React, { useState } from 'react';
import paletteData from '../pallete.json';
import './ColorPalette.css';
import clickSound from './src_notify.mp3';

const ColorPalette = () => {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    navigator.clipboard.writeText(color);
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div className="palette-container">
      {selectedColor ? (
        <div className="full-screen" style={{ backgroundColor: selectedColor }} onClick={() => setSelectedColor(null)}>
          <span className="color-code">{selectedColor}</span>
        </div>
      ) : selectedPalette ? (
        <div className="full-screen">
          <button className="back-button" onClick={() => setSelectedPalette(null)}>⬅ Назад</button>
          <div className="full-screen-colors">
            {selectedPalette.colors.map((color) => (
              <div 
                key={color.color} 
                className="full-color-box" 
                style={{ backgroundColor: color.color }} 
                onClick={(e) => {
                  e.stopPropagation();
                  handleColorClick(color.color);
                }}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        paletteData.map((palette) => (
          <div key={palette.id} className="palette-card" onClick={() => setSelectedPalette(palette)}>
            <h2 className="palette-title">{palette.emoji} {palette.paletteName}</h2>
            <div className="color-grid">
              {palette.colors.map((color) => (
                <div 
                  key={color.color} 
                  className="color-box" 
                  style={{ backgroundColor: color.color }}
                ></div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ColorPalette;