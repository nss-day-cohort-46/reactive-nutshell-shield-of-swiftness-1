// Author: Tracy Depp
// Purpose: Responsible for rendering individual task obj as HTML

import React, {useContext, useEffect, useState} from "react"
import {TaskContext} from "./TaskProvider.js"
import {Task} from "./Task.js"
import {useHistory} from "react-router-dom"


export const TaskList = () => {
    const history = useHistory()
    // This state changes when `getTasks()` is invoked below
    const { tasks, getTasks} = useContext(TaskContext)
    const [filteredTasks, setFilteredTasks] = useState([])
    
     //useEffect - reach out to the world for something - API call for the tasks; wil only run one time at intial render because array is empty
    useEffect(() => {
      getTasks()
      }, [])

   
    useEffect(() => {
      getTasks()
      .then(()=>{
        const subset = filteredTasks.filter(task=> task.isComplete === false)
        setFilteredTasks(subset)
      })

    }, [])


    return (
      <div className="tasks">
          <h2>Tasks</h2>
          <button onClick={() => {history.push("/tasks/create")}}>
            Add New Task
          </button>
        {/* {console.log("TaskList: Render", tasks)} */}
        {
            // using .map method to iterate the array of tasks and generate HTML for each one by invoking the "Task" comp
          tasks.map(taskObj=> {
            //   key and task become properties on the object passed in as in argument
            return <Task key={taskObj.id} task={taskObj} />
          })
        }
      </div>
    )
  } 