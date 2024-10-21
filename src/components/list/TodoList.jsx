import "./STodoList.css"
import React from 'react'

export default function TodoList({children}) {
  return (
    <ul className="TodoList">
      {children}
    </ul>
  )
}
