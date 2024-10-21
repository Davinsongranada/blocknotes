import React from 'react'
import { VscSearch } from "react-icons/vsc";

import "./STodoSearch.css"
import { TodoContext } from '../TodoContext/Context';

export default function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  return (
    <>
      <input type="text"
      placeholder='Escribe'
      className='TodoSearch'
      value={searchValue}
      onChange={(e)=>{
        let event = e.target.value
        setSearchValue(event)
      }}/>
    </>
  )
}
