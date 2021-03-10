import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "../tasks/TaskProvider.js"
import { useHistory } from 'react-router-dom';

export const TaskForm = () => {
    const {addTask} = useContext(TaskContext)
    const {getTasks } = useContext(TaskContext)
    const userId = parseInt(sessionStorage.getItem("nutshell_user"))
       /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    Define the intial state of the form inputs with useState()
    */

    const [tasks, setTasks] = useState({
      name: "",
      date: "",
      isComplete: false,
      id: 0,
      userId: userId
    });

    const history = useHistory();

    /*
    Reach out to the world and get tasks state
    and task state on initialization
    */
    useEffect(() => {
      getTasks()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
      
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newTask = { ...tasks }
      let selectedVal = event.target.value
      
      // forms always provide values as strings. But we want to save the ids as numbers. 
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* LTask is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newTask[event.target.id] = selectedVal
      // update state
      setTasks(newTask)
    }

    const handleClickSaveTask = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

        //invoke addTask passing locations as an argument.
        //once complete, change the url and display the tasks list
        addTask(tasks)
        .then(() => history.push("/tasks"))
      }
    

    return (
      <form className="taskForm">
          <h2 className="taskForm__title">New Task</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Task:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task name" value={tasks.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="date">Completed by Date:</label>
                  <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task date" value={tasks.date}/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveTask}>
            Save New Task
          </button>
      </form>
    )
}