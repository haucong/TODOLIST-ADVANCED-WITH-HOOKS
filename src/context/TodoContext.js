import React,{ createContext, useEffect, useState, useReducer } from "react";
import { stringify } from "uuid";
import {TodoReducer} from '../Reducer/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from "../Reducer/type";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(TodoReducer, [])

  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    })
  }, [])

  // useEffect(() => {
  //   console.log('getting todos');
  //   const todos = localStorage.getItem('todos');
  //   if(todos) setTodos(JSON.parse(todos))
  // },[])

  useEffect(() => {
    console.log('save todos');
    dispatch({
      type: SAVE_TODOS,
      payload: {
        todos
      }
    })
  }, [todos])

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo])
  // }

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // };

  const todoContextData = {
     todos,
    dispatch
    };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}
export default TodoContextProvider