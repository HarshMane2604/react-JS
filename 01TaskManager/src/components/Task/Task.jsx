import React, {useState} from 'react'

function Task() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])
  const handleAddTask = () => {
    if(input.trim() !== ""){
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTask([...task, newTask]);
      setInput("")
    }
  };

  const toggleComplete = (id) => {
    const updateTasks = task.map((task) => (
      task.id === id ? {...task, completed: !task.completed} :task
    ));
    setTask(updateTasks)
  }

  const deleteTask = (id) => {
    const fileteredTasks = task.filter((task) => task.id !== id)
    setTask(fileteredTasks)
  }
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-800 rounded-2xl text-white flex flex-col justify-start items-center py-20 px-4'>
        <h1 className='text-4xl font-bold mb-8 text-emerald-400'>📝 Your Tasks</h1>

        <div className='w-full max-w-2xl flex gap-4 mb-6  '>
            <input 
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Add a new task...'
              className='flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus: ring-emerald-400'  
            />
            <button 
            onClick={handleAddTask}
            className='bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold'>
              Add 
            </button>
        </div>

          <ul className='w-full max-w-2xl space-y-4'>
            {task.map((task) => (
              <li
              key={task.id}
              className={`flex justify-between items-center px-4 py-3 rounded-lg ${task.completed ? "bg-gray-700 line-through text-gray" : "bg-gray-800"}`}>
                <span onClick={() => toggleComplete(task.id)} className='cursor-pointer'>{task.text}</span>
                <button 
                onClick={() => deleteTask(task.id)}
                className='text-red-400 hover:text-red-600 transition'>❌</button>
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default Task