import React from 'react'

function TododItem({ todoText }) {
  return <div className="todo-item">
    <input name="checkbox" type="checkbox" />
    <label for="checkbox">{todoText}</label>
  </div>
}

export default TododItem