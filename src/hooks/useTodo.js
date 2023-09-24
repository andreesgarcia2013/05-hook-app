import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';
export const useTodo = () => {
    const initialState=[];

    const init=()=>{
        return JSON.parse(localStorage.getItem('todos'))||[];
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action={
            type: '[TODO] Add',
            payload: todo,
        }

        dispatchTodo(action);

    }

    const handleRemoveTodo=(id)=>{
        // console.log(id);
        const action={
            type: '[TODO] Remove',
            payload: id,
        }
        dispatchTodo(action);
    }

    const handleToggleTodo=(id)=>{
        // console.log(id);
        const action={
            type: '[TODO] Toggle',
            payload: id,
        }
        dispatchTodo(action);
    }

  return {
    todos,
    
    countTodo:  todos.length,
    pendingTodo: todos.filter(todo=>!todo.done).length,

    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
