import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './matrix.css'

function Matrix({ todoItems }) {
  return <div className="matrix">
    <div className="todos-container">
      <h3 style={{ "--color": "red" }}><div className="category-indicator-symbol"></div> Urgent and Important</h3>
      <ul className="todos">
        {["click + to add a item", "click x to delete a item"].map(item => {
          return <TodoItem todoText={item} />
        })}
      </ul>
    </div>
    <div className="todos-container">
      <h3 style={{ "--color": "#CCCC00" }}><div className="category-indicator-symbol"></div> Urgent and Unimportant</h3>
      <ul className="todos"></ul>
    </div><div className="todos-container">
      <h3 style={{ "--color": "#FF8C00" }}><div className="category-indicator-symbol"></div> Not Urgent and Important</h3>
      <ul className="todos"></ul>
    </div><div className="todos-container">
      <h3 style={{ "--color": "#006400" }}><div className="category-indicator-symbol"></div> Not Urgent and Unimportant</h3>
      <ul className="todos"></ul>
    </div>
  </div>
}

export default Matrix