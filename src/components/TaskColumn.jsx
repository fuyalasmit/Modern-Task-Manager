import React from 'react'
import Todo from '../assets/direct-hit.png'
import TaskCard from './TaskCard'

const TaskColumn = ({icon,columnTitle}) => {

    return (
        <section className='taskColumn w-1/3 m-[20px]' >
            <h2 className='taskColumnHeading flex items-center' >
                <img className='taskColumnIcon w-[30px] mr-[5px] inline' src={icon} alt="" /> {columnTitle}
            </h2>
            <TaskCard/>
        </section>
    )
}

export default TaskColumn