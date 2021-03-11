// Author: Tracy Depp
// Purpose: Responsible for rendering HTML rep of individual tasks.

import React, { useContext } from "react"
import {TaskContext} from "./TaskProvider.js"






export const Task = ({task}) => {
    
    const {completeTask, deleteTask} = useContext(TaskContext)
   

    const taskCompleted =() => {
        completeTask(task.id)
    }    
      
        const handleDelete = () => {
            deleteTask(task.id)
    }

    return (

    <section className="task">
    <div className="task__name">Task: {task.name}</div>
    <div className="task__date">To Be Completed by: {task.date}</div>
    <input id="task__completed" type ="checkbox" onChange={taskCompleted} value={task.id}/>
    <button className="task__delete"
            onClick={handleDelete}>Delete Task</button>
    </section>
)

}