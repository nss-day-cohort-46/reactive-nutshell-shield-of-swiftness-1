import React, { useState, createContext, useEffect } from "react"

export const FriendsContext = createContext()
// The context is imported and used by individual components that need data.

// A context stores a certain kind of data to be used in your application.
// Therefore, when you create a data provider component in React, you need to create a context.
// Nothing is stored in the context when defined, its just an empty warehouse waiting to be filled.


// This component establishes what data can be used
// Its time to define the data provider component that will allow other components to use the
// data in context
export const FriendsProvider = (props) => {

    // Manages the state of all Friends realtionships from the database
    const [friends, setFriends] = useState([])
    // Manages state of friends of the current user
    const [filteredFriends, setFilteredFriends] = useState([])
   

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then(res => res.json())
            .then(setFriends)
    }
    const addFriends = (obj) => {
        return fetch("http://localhost:8088/friends", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        })
        .then(getFriends)
      }

    //   const removeFriend = (id) => {
    //     return fetch(`http://localhost:8088/friends/${id}`, {
    //       method: "DELETE"
    //     })
    //     .then(getFriends)
    //   }

    //    const filterFriends = () => {
    //     return friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    // }

    // useEffect(() => {
    //     setFilteredFriends(filterFriends())
    // }, [friends])

    return (
        <FriendsContext.Provider value={{
            friends, getFriends, addFriends
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}

// This module provides a friend data to the app.