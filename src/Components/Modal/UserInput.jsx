import React from 'react'
import {useState} from 'react'

function UserInput() {
  const handleSubmit = (value) => {
    const val = value;
    console.log(val)
  }

  const [toDoValue, setToDoValue] = useState("")

  
  return <div>
    <form>
    <input onChange={(e) => {
      let v = e.target.value
      setToDoValue(v)
    }} className="toDoInput" type="text" placeholder="my new todo item" value={toDoValue}/>
    <button onClick= {(e) =>  {
    e.preventDefault()
    handleSubmit(toDoValue);
    setToDoValue('');
    }}>Add</button>
    </form>
  </div>
}

export default UserInput;