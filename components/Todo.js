import React from 'react'

const Todo = ({ onClick, completed, text }) => {
  console.log('in single todo')
  debugger;
  return (
    <li
      onClick={ onClick }
      style={
        { textDecoration: completed? 'line-through' : 'none' }
      }
    >
    { text }
    </li>
  )
}

export default Todo
