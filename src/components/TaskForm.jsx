import React, { useState } from 'react'
import Tag from './Tag'

const TaskForm = () => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo"
    })
    const changeHandler = (e) =>{
        const {name, value}  = e.target
        setTaskData(prev => {
            return { ...prev,[name]: value  }
        })
    }
    const submitHandler = (e) =>{
            e.preventDefault() ;

        }
        
    return (
        <header className='appHeader flex items-center justify-center border-b-[1px] border-[#dcdcdc] ' >
            <form onSubmit={submitHandler} className='w-[60%]' action="">
                <input  onChange={changeHandler} name='task' type="text" className='taskInput text-xl font-medium bg-[#f9f9f9] text-black border-[1px] border-[#dfe3e6] rounded px-3 py-2 mb-3.5 w-[60%] ' placeholder='Enter Your Task' />
                <div className='taskFormBottomLine flex items-center justify-between' >
                    <div>
                        <Tag tagName="Home Work"/>
                        <Tag tagName="Project Work" />
                        <Tag tagName="Exam Preparation" />
                        <Tag tagName="Self Study" />
                    </div>
                    <div>
                    <select onChange={changeHandler} className='taskStatus text-base font-medium border-[1px] border-[#999] rounded w-[120px] h-[40px] px-1' name="status" id="">
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='taskSubmit text-base font-medium bg-[#6457f9] text-[#fff] rounded h-[40px] py-1 px-3 ml-2.5 border-none cursor-pointer ' >+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm