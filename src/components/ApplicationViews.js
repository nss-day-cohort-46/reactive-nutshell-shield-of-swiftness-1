import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <FriendsProvider >
      <Route path="/friends">
        <FriendsList/>
      </Route>
      </ FriendsProvider >

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
