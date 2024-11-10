import React, { useState } from 'react'

const DropArea = ({ dropHandler, status, index }) => {
    const [showDrop, setShowDrop] = useState(false)

    return (
        <section 
         onDragEnter={() => { setShowDrop(true) }}
         onDragLeave={() => { setShowDrop(false) }} 
         onDrop={()=> {
            dropHandler(status,index);
            setShowDrop(false);
        }}
         onDragOver={(e)=>{
            e.preventDefault();
         }}
         className={`${showDrop ? "w-full h-20 border-[1px] border-[#dcdcdc] rounded-lg p-3.5 mb-3.5 opacity-100 transition-all duration-200 ease-in-out flex justify-center font-bold" : "opacity-0"}`} >
            Drop Here
        </section>
    )
}

export default DropArea