import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'

export default function TodoApp(){
  /*
  - job:
    fetch todos from server
  - pass them to the TodoList

  - TodoForm
  */
  const [ todo, setTodo ] = useState({ title: "", completed: false })
  const [ allTodos, setAllTodos ] = useState([])

  function handleInput(title){
    setTodo({ ...todo, title })
  }

  function handleSubmit(event){
    event.preventDefault()
    /*
    save the todo into allTodos
      - post request to the server
    clear the form
    */
    setAllTodos([...allTodos, todo])
    setTodo({ title: "", completed: false })
  }

  useEffect(() => console.log(todo))
  useEffect(() => console.log(allTodos))
  return (
    <>
      <TodoForm 
        todo={todo} 
        handleInput={handleInput} 
        handleSubmit={handleSubmit}
      />
    </>
  )

}