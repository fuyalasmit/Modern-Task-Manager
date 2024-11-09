import React from 'react'

const Tag = ({tagName, tagHandler, selected}) => {  
  const tagStyle = {
    "Home Work": { backgroundColor: "#fda821"},
    "Project Work": { backgroundColor: "#15d4c8"},
    "Exam Preparation": { backgroundColor: "#ffd12c"},
    "Self Study": { backgroundColor: "#4cdafc"},
    default : { backgroundColor: "#f9f9f9"},

  }
  return (
    <button onClick={()=>{tagHandler(tagName)}}
     type='button' 
     style={selected? tagStyle[tagName]:tagStyle.default}
     className='tag text-sm font-normal bg-[#f9f9f9] border-[1px] border-[#dfe3e6] rounded py-0.5 px-2.5 cursor-pointer' >{tagName}</button>
  )
}

export default Tag