import React, { useState } from 'react'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })
    const changeHandler = (e) => {
        const { name, value } = e.target
        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks(prev => {
            return [ ...prev, taskData]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })
    }

    const tagHandler = (tag) => {
        if (taskData.tags.some((item) => item === tag)) {
            let filterTags = taskData.tags.filter((item) => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        }
        else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }
    
    const tagChecker = (tag) => {
        return taskData.tags.some( item => item === tag)
    }

    return (
        <header className='appHeader flex items-center justify-center border-b-[1px] border-[#dcdcdc] ' >
            <form onSubmit={submitHandler} className='w-[60%]' action="">
                <input onChange={changeHandler} name='task' value={taskData.task} type="text" className='taskInput text-xl font-medium bg-[#f9f9f9] text-black border-[1px] border-[#dfe3e6] rounded px-3 py-2 mb-3.5 w-[100%] ' placeholder='Enter Your Task' />
                <div className='taskFormBottomLine flex items-center justify-between' >
                    <div className='flex gap-2 flex-wrap'>
                        <Tag tagName="Home Work" tagHandler={tagHandler} selected={tagChecker("Home Work")} />
                        <Tag tagName="Project Work" tagHandler={tagHandler} selected={tagChecker("Project Work")} />
                        <Tag tagName="Exam Preparation" tagHandler={tagHandler} selected={tagChecker("Exam Preparation")} />
                        <Tag tagName="Self Study" tagHandler={tagHandler} selected={tagChecker("Self Study")} />
                    </div>
                    <div className='flex gap-2.5 flex-wrap'>
                        <select onChange={changeHandler} className='taskStatus text-base font-medium border-[1px] border-[#999] rounded w-[120px] h-[40px] px-1' name="status" value={taskData.status} id="">
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='taskSubmit text-base font-medium bg-[#6457f9] text-[#fff] rounded h-[40px] py-1 px-3 border-none cursor-pointer ' >+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm
