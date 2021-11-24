import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TodoContext } from '../context/TodoContext'
import { DELETE_TODO } from '../Reducer/type'

const TodoItems = ({ todo }) => {
  
 const { theme } = useContext(ThemeContext)
 const { isLightTheme, light, dark } = theme
 const style = isLightTheme ? light : dark

 const { dispatch } = useContext(TodoContext)

  const handleDelete = () => {
    dispatch({
      type: DELETE_TODO,
      payload:{
        id: todo.id
      }
    })
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
