// Author: Tracy Depp
// Purpose: Responsible for rendering HTML rep of individual tasks.

import React, { useContext } from "react"
import {TaskContext} from "./TaskProvider.js"
import {useHistory} from "react-router-dom"





export const Task = ({task}) => {
    const history = useHistory();

    const {completeTask} = useContext(TaskContext)
   

    const taskCompleted =() => {
        completeTask(task.id)
      
    }

    return (

    <section className="task">
    <div className="task__name">Task: {task.name}</div>
    <div className="task__date">To Be Completed by: {task.date}</div>
    <input id="task__completed" type ="checkbox" onChange={taskCompleted} value={task.id}/>
    </section>
)

}