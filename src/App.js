// Import data
import React from 'react';
import { Gallery } from './gallery.js';
                
// Import components
import './App.css';

function App(){
  return (
    <div className="App">
      <header>
        <h1>A Web Market App</h1>
      </header>
      <div>
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
