// This is the root component of the React app
// It will hold the main state: an array of tasks
// On load, it will fetch tasks from the backend and store them
// It will pass the tasks and functions (like addTask, deleteTask) to child components

import React, { useState } from 'react'

export const TaskList = () => {

    const [taskList,setTaskList] = useState([])

  return (
    <div>TaskList</div>
  )
}
