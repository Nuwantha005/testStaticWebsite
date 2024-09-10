import React, { useState } from 'react';
import P5Sketch from './P5Sketch';

function App() {
  const [speed, setSpeed] = useState(5);
  const [color, setColor] = useState([255, 0, 0]);

  const changeColor = () => {
    setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      
      {/* Left Section: UI Components */}
      <div className="flex flex-col items-start justify-top w-full lg:w-1/2 p-6 space-y-6">
        <h1 className="text-3xl font-bold">P5.js with React & Tailwind CSS</h1>

        <div className="w-full">
          <label htmlFor="speed" className="block text-lg mb-2">Circle Size:</label>
          <input 
            id="speed" 
            type="range" 
            min="1" 
            max="25" 
            value={speed}
            onChange={(e) => setSpeed(e.target.value)} 
            className="w-full"
          />
        </div>

        <button 
          onClick={changeColor} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Change Color
        </button>
      </div>

      {/* Right Section: p5.js Animation Frame */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-full p-1">
        
          <P5Sketch speed={speed} color={color} />
        
      </div>
    </div>
  );
}

export default App;
