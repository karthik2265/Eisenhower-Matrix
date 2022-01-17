import React from 'react'
import './TodoItem.css'

function TododItem({ todoText }) {
  return <div className="todo-item">
    <input name="checkbox" type="checkbox" />
    <label htmlFor="checkbox">{todoText}</label>
    <div class="btn btn-delete">X</div>
  </div>
}

export default TododItem