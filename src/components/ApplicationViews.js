import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { ArticleProvider } from "./Articles/ArticlesProvider"
import { ArticlesList } from "./Articles/ArticlesList"
import { EventForm } from "./events/EventForm"
import { FriendsProvider } from "./friend/FriendsProvider"
import { FriendsList } from "./friend/FriendsList"
import { UsersProvider } from "./users/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import {TaskList} from "./tasks/TaskList"
import { FriendsSearch } from "./friend/FriendsSearch"
import {TaskForm} from "./tasks/TaskForm"

export const ApplicationViews = () => {
  return (
    <>

      
      <ArticleProvider>
        <Route exact path="/articles">
          <ArticlesList />  
        </Route>
      </ArticleProvider>
      
      <Route path="/friends">
        {/* Render the component for list of friends */}
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
        <Route exact path="/tasks">
          <TaskList />
        </Route>
        <Route path="/tasks/create">
          <TaskForm />
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
