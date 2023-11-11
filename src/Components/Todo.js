import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoslice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
        {todos.map((todo) => (
          <li
            key={todo.id}
          >
            <div>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      
    </>
  )
}

export default Todo;