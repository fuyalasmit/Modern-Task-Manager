import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({title,tags, deleteHandler, index}) => {
    return (
        <article className='taskCard w-full h-auto border-[1px] border-[#dcdcdc] rounded-lg p-3.5 my-3.5' >
            <p className='taskText font-semibold text-lg mb-3.5 ' >{title}</p>
            <div className='taskCardBottomLine flex items-center justify-between '>
                <div className="taskCardTags flex gap-2 flex-wrap">
                    {
                        tags.map((value,index)=>{
                           return <Tag key={index} tagName={value} selected />
                        })
                    }
                </div>
                <div onClick={() => deleteHandler(index)} className="taskDelete w-[25px] h-[27px] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ebebeb] flex justify-center items-center ">
                    <img className='deleteIcon w-[17px] opacity-50 transition-all duration-300 ease-in-out hover:opacity-80' src={deleteIcon} alt="" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard