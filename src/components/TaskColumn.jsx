import React from 'react'
import TaskCard from './TaskCard'
import DropArea from './DropArea'

const TaskColumn = ({ icon, columnTitle, tasks, status, deleteHandler, setActiveCard, dropHandler }) => {

    return (
        <section className='taskColumn w-1/3 m-[20px]' >
            <h2 className='taskColumnHeading flex items-center mb-3.5' >
                <img className='taskColumnIcon w-[30px] mr-[5px] inline' src={icon} alt="" /> {columnTitle}
            </h2>
            <DropArea dropHandler={dropHandler} status={status} index={0} />
            {
                tasks.map((value, index) => {
                    return value.status === status &&
                        <React.Fragment key={index} >
                            <TaskCard title={value.task} tags={value.tags} deleteHandler={deleteHandler} index={index} setActiveCard={setActiveCard} />
                            <DropArea dropHandler={dropHandler} status={status} index={index+1} />
                        </React.Fragment>

                })
            }
        </section>
    )
}

export default TaskColumn