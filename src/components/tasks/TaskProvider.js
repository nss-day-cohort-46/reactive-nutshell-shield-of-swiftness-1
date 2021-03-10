// Author: Tracy Depp 
// Purpose: Get data from API using functions, "getTasks", "addTask" and created TaskContext to store the data to be used in other components.

import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
            .then(setTasks)
    }


   const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })

   }

 //completeTask function with taskId as a parameter (need to connect the checkbox/isComplete to a task id)

   const completeTask = taskId => {
    // taskComplete function changes changes isComplete to true, default is false
    const taskComplete = {
        isComplete: true
    }

    //PATCH method edits/updates a single key:value pair in the database
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskComplete)
    })
        .then(getTasks)
       

    }



    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, completeTask
        }}>

            {props.children}
        </TaskContext.Provider>
    )

}