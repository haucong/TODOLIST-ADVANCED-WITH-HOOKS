import React,{ createContext, useEffect, useState } from "react";
import { stringify } from "uuid";
export const TodoContext = createContext();
const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('getting todos');
    const todos = localStorage.getItem('todos');
    if(todos) setTodos(JSON.parse(todos))
  },[])

  useEffect(() => {
    console.log('save todos');
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const todoContextData = {todos, addTodo, deleteTodo};

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}
export default TodoContextProvider