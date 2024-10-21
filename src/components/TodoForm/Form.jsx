import React from 'react'
import { TodoContext } from "../TodoContext/Context"
import "./Sform.css"


export default function Form() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setnewTodoValue] = React.useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange = (ev)=>{
        const value = ev.target.value
        setnewTodoValue(value)
    }


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='Escribe tu tarea' ></textarea>
      <div className='TodoForm-buttonContainer'>
      <button type='button' className='TodoForm-button TodoForm-button--cancel'
      onClick={onCancel}>
        Cancelar
      </button>
      <button type='submit' className='TodoForm-button TodoForm-button--add'>
        Añadir
        </button>
      </div>
    </form>
  )
}
