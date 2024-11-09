import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const App = () => {
  const [tasks, setTasks] = useState([])
  const deleteHandler = (taskIndex) => {
    const newTasks = tasks.filter((value, index) => {
      return index !== taskIndex
    })
    setTasks(newTasks);
  }
  return (
    <>
      <div className='app' >
        <TaskForm setTasks={setTasks} />
        <main className='appMain flex flex-row justify-evenly py-[20px] px-[8%]' >
          <TaskColumn icon={todoIcon} columnTitle="To Do" tasks={tasks} status="todo" deleteHandler={deleteHandler}/>
          <TaskColumn icon={doingIcon} columnTitle="Doing" tasks={tasks} status="doing" deleteHandler={deleteHandler}/>
          <TaskColumn icon={doneIcon} columnTitle="Done" tasks={tasks} status="done" deleteHandler={deleteHandler}/>
        </main>
      </div>
    </>
  )
}

export default App