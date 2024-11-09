import React from 'react'
import TaskCard from './TaskCard'

const TaskColumn = ({ icon, columnTitle, tasks, status, deleteHandler }) => {

    return (
        <section className='taskColumn w-1/3 m-[20px]' >
            <h2 className='taskColumnHeading flex items-center' >
                <img className='taskColumnIcon w-[30px] mr-[5px] inline' src={icon} alt="" /> {columnTitle}
            </h2>
            {
                tasks.map((value, index) => {
                    return value.status === status && <TaskCard key={index} title={value.task} tags={value.tags} deleteHandler={deleteHandler} index={index}  />
                })
            }
        </section>
    )
}

export default TaskColumn