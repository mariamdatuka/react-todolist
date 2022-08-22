import React from 'react'
import ToDo from './ToDo';

export default function Todolist({toDos, setToDos, filteredToDos}) {
    
  return (
    <div className="todo-container">
      <ul className="todo-list">
    {filteredToDos.map(todo=>(<ToDo key={todo.id} text={todo.text}
     setToDos={setToDos} todo={todo} toDos={toDos}/>))}
      </ul>
    </div>

  )
}
