import React from 'react';
import './App.css'; 
import ColorPalette from './components/ColorPalette'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Palette Selector</h1>
      </header>
      <main>
        <ColorPalette />
      </main>
    </div>
  );
}

export default App;
