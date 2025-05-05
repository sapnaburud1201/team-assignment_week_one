import Counter from './Counter'; // Import the Counter component
import './App.css'; 
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome To The Counter App</h1>
      <Counter initialValue={0} /> {/* Render the Counter component with initialValue prop */}

    </div>
  );
}

export default App;
