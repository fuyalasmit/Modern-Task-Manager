import React from 'react'

const Tag = (props) => {  
  return (
    <button className='tag text-sm font-medium bg-[#f9f9f9] border-[1px] border-[#dfe3e6] rounded py-0.5 px-2.5 mr-2.5 cursor-pointer' >{props.tagName}</button>
  )
}

export default Tag