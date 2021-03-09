// Author: Tracy Depp 
// Purpose: Get data from API using functions, "getTasks", "addTask" and created TaskContext to store the data to be used in other components.

import React, {useState, createContext} from "react"

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

  
    
return (
    <TaskContext.Provider value={{
        tasks, getTasks, addTask
    }}>

        {props.children}
    </TaskContext.Provider>
)

}