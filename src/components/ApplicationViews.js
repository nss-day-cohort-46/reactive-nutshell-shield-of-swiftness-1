import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticlesList } from "./Articles/ArticlesList"

export const ApplicationViews = () => {
  return (
    <>

      
      <ArticlesProvider>
      <Route exact path="/articles">
        <ArticlesList />  
      </Route>
      </ArticlesProvider>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
        {/* Render the component for the user's events */}
      <EventProvider>
        <Route path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  )
}
