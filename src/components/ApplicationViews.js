import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { FriendsProvider } from "./friend/FriendsProvider"
import { FriendsList } from "./friend/FriendsList"
import { UsersProvider } from "./users/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import {TaskList} from "./tasks/TaskList"
import { FriendsSearch } from "./friend/FriendsSearch"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <FriendsProvider>
      <UsersProvider>
        <Route exact path="/friends">
          {/* Render the component for list of friends */}
          <FriendsList />
          </Route>

          <Route exact path="/friends/search">
          <FriendsSearch />
          </Route>
       
      </UsersProvider>
      </FriendsProvider>


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
        <Route exact path="/events">
          <EventList />
        </Route>

        <Route path="/events/create">
          <EventForm />
        </Route>
      </EventProvider>
    </>
  )
}
