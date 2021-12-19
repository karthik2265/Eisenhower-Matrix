import React from 'react';
import './App.css';
import AddBtn from './Components/AddBtn/AddBtn'
import Matrix from './Components/Matrix/Matrix'

function App() {
  return (
    <div id="app">
      <h1 className="py">Eisenhower Matrix</h1>
      <Matrix />
    </div>
  );
}

export default App;