import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TodoContext } from '../context/TodoContext'

const TodoItems = ({ todo }) => {
  
 const { theme } = useContext(ThemeContext)
 const { isLightTheme, light, dark } = theme
 const style = isLightTheme ? light : dark

 const { deleteTodo } = useContext(TodoContext)

  const handleDelete = () => {
    deleteTodo(todo.id);
  }
  return (
    <div className='container todo-list'>
      <li onClick={handleDelete} style={style}>
        {todo.title}
      </li>
    </div>
  )
}

export default TodoItems
