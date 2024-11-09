import React from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const App = () => {
  return (
    <>
      <div className='app' >
        <TaskForm />
        <main className='appMain flex flex-row justify-evenly py-[20px] px-[8%]' >
          <TaskColumn icon={todoIcon} columnTitle = "To Do" />
          <TaskColumn icon={doingIcon} columnTitle = "Doing" />
          <TaskColumn icon={doneIcon} columnTitle = "Done" />
        </main>
      </div>
    </>
  )
}

export default App