import React from 'react'
import { deleteTodo } from '../redux/reducer/todo-reducer'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/reducer/todo-reducer'


export const Card = ({ name, lastname, id }) => {
  const dispatch=useDispatch()

  return (
    <div>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
      <button onClick={()=>dispatch(deleteTodo({id}))}>delete</button>
      <button onClick={()=>dispatch(editTodo({id}))}>edit</button>
    </div>
  )
}
