import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"


// localStorage.clear();

const oldTasks = localStorage.getItem("Tasks")

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  const [activeCard, setActiveCard] = useState(null)
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
  }, [tasks])


  const deleteHandler = (taskIndex) => {
    const newTasks = tasks.filter((value, index) => {
      return index !== taskIndex
    })
    setTasks(newTasks);
  }

  const dropHandler = (status, position) => {
    console.log(` ${activeCard} is going to be placed on ${status} and at the position ${position} `);
    if (activeCard === null || activeCard === undefined) {
      return;
    }
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((value, index) => { return index !== activeCard })
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='app' >
        
        <TaskForm setTasks={setTasks} />
        <main className='appMain flex flex-row justify-evenly py-[20px] px-[8%]' >
          <TaskColumn icon={todoIcon} columnTitle="To Do" tasks={tasks} status="todo" deleteHandler={deleteHandler} setActiveCard={setActiveCard} dropHandler={dropHandler} />
          <TaskColumn icon={doingIcon} columnTitle="Doing" tasks={tasks} status="doing" deleteHandler={deleteHandler} setActiveCard={setActiveCard} dropHandler={dropHandler} />
          <TaskColumn icon={doneIcon} columnTitle="Done" tasks={tasks} status="done" deleteHandler={deleteHandler} setActiveCard={setActiveCard} dropHandler={dropHandler} />
        </main>
      </div>
    </>
  )
}

export default App