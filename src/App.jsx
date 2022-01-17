import React from 'react';
import './App.css';
import AddBtn from './Components/AddBtn/AddBtn';
import Matrix from './Components/Matrix/Matrix'
import Modal from './Components/Modal/UserInput'
import {useState} from 'react'

function App() {
  const [modalOpen, setModalState] = useState(true)
  return (
    <div id="app">
      <h1 className="py">Eisenhower Matrix</h1>
      <Matrix />
      <AddBtn/>
    {modalOpen && <Modal/>}
    </div>
  );
}

export default App;