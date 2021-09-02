import { useState, useEffect } from 'react'

export default function TodoForm() {
  const [ todo, setTodo ] = useState({ title: "", completed: false })

  function handleInput(title){
    setTodo({ ...todo, title })
  }

  useEffect(() => console.log(todo))
  return (
    <form>
      <input
        type="text"
        value={todo.title}
        onChange={ (event) => handleInput(event.target.value)}
      />
      <input
        type="submit"
        value="Click"
        onClick={handleSubmit}
      />
    </form>
  )
}