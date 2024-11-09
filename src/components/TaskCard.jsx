import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = () => {
    return (
        <article className='taskCard w-full h-[100px] border-[1px] border-[#dcdcdc] rounded-lg p-3.5 my-3.5' >
            <p className='taskText font-semibold text-lg mb-3.5 ' >This is Sample Text</p>
            <div className='taskCardBottomLine flex items-center justify-between '>
                <div className="taskCardTags">
                    <Tag tagName="Home Work" />
                    <Tag tagName="Self Study" />
                </div>
                <div className="taskDelete w-[25px] h-[27px] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ebebeb] flex justify-center items-center ">
                    <img className='deleteIcon w-[17px] opacity-50 transition-all duration-300 ease-in-out hover:opacity-80' src={deleteIcon} alt="" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard