// This is the root component of the React app
// It will hold the main state: an array of tasks
// On load, it will fetch tasks from the backend and store them
// It will pass the tasks and functions (like addTask, deleteTask) to child components

import { response } from 'express';
import React, { useEffect, useState } from 'react'

export const TaskList = () => {

    const [taskList,setTaskList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/tasks`)
        .then(response => response.json())
        .catch(error => console.error(error))
    }, [])
    
  return (
    <div>TaskList</div>
  )
}
