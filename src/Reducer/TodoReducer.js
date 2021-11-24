import {GET_TODOS, SAVE_TODOS, DELETE_TODO, ADD_TODO} from './type';

export const TodoReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_TODOS: 
        console.log('getting todo');
        const todos = localStorage.getItem('todos');
        if(todos) state = JSON.parse(todos)
        return state

        case SAVE_TODOS:
            console.log('save todo');
            localStorage.setItem('todos', JSON.stringify(payload.todos))
            return state

        case DELETE_TODO:
            console.log('delete todo');
            return state.filter((todo) => todo.id !== payload.id)
        case ADD_TODO:
            console.log('add todo');
            return [...state, payload.todo]
        default :
            return state
    }
    
}
// export default TodoReducer