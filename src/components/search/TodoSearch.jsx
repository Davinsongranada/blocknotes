import React from 'react'
import { VscSearch } from "react-icons/vsc";

import "./STodoSearch.css"

export default function TodoSearch({searchValue, setSearchValue}) {
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
