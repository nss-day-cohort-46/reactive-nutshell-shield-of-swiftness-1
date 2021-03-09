import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { TaskProvider } from "./tasks/TaskProvider"
import {TaskList} from "./tasks/TaskList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      
       {/* Render the component for the user's tasks */}
      <TaskProvider>
      <Route path="/tasks">
       <TaskList/>
      </Route>
      </TaskProvider>

        {/* Render the component for the user's events */}
      <EventProvider>
        <Route path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  )
}
