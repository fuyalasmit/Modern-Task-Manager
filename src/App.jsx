import React from 'react'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <>
      <div className='app' >
        <TaskForm />
        <main className='appMain flex flex-row justify-evenly py-[20px] px-[8%]' >
          <section className='taskColumn w-1/3 bg-red-700 m-[20px]' >Section 1</section>
          <section className='taskColumn w-1/3 bg-red-700 m-[20px]' >Section 2</section>
          <section className='taskColumn w-1/3 bg-red-700 m-[20px]' >Section 3</section>
        </main>
      </div>
    </>
  )
}

export default App