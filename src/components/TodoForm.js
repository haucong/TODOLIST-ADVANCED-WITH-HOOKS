import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../context/ThemeContext'
import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../Reducer/type'
const TodoForm = () => {
  const [title, setTitle] = useState('')

  const styles = {
    background: 'rga(240,240,240)',
    color: 'black',
    border: '2px solid #333'
  }

 const { theme } = useContext(ThemeContext)
 const { isLightTheme, light, dark } = theme
 const style = isLightTheme ? light : dark

  const { dispatch} = useContext(TodoContext);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = event => {
      event.preventDefault();
       dispatch({
        type: ADD_TODO,
        payload: {
          todo: {
            id: uuidv4(),
            title
          }
        }
       })
    setTitle('')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} style={style}>
        <input
          type='text'
          placeholder='Nhập công việc'
          onChange={onTitleChange}
          value={title}
          required
        />
        <input type='submit' value='Thêm' style={styles} />
      </form>
    </div>
  )
}

export default TodoForm
