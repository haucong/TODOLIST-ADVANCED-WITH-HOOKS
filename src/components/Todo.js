import React, { useContext, useState } from 'react'
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'
import { TodoContext } from '../context/TodoContext'
import { AuthContext} from '../context/AuthContext'
const Todo = () => {
    const {todos} = useContext(TodoContext);
    const {isAuthenticated} = useContext(AuthContext);
    return (
      <>
      <TodoForm/>
      {
        isAuthenticated ? ( 
          todos.map(todo => (
            <TodoItems key={todos.id} todo={todo}/>  
          ))
        ) : (<p style={{textAlign: 'center'}}>BẠN CHƯA ĐĂNG NHẬP, HÃY ĐĂNG NHẬP ĐỂ XEM CHI TIẾT 😊</p>)
      }
     
      </>
    )
}

export default Todo;
     