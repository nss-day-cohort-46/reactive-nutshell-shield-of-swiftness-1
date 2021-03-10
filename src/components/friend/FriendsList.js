import React, { useContext, useEffect } from "react"
// The useContext hook allows you to use data structures and functions that a parent provider component exposes.
// To start, you need to import the context object you created in the provider component so that the Context hook can access the objects it exposes
import { UsersContext } from "../users/UserProvider"
import { FriendsContext } from "./FriendsProvider"
import { FriendCard } from "./FriendsCard"
import "./Friends.css"
import { Link } from "react-router-dom"


export const FriendsList = () => {
     // This state changes when `getFriends()` is invoked below
    const {friends, getFriends} = useContext(FriendsContext)
    const {users, getUsers} = useContext(UsersContext)
    

    // The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the friends.
    useEffect(() => {
        getUsers()
        .then(getFriends)
      }, [])


      const filteredFriends = friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
      const matchingFriends = filteredFriends.map(friend => users.find(user => user.id === friend.userId))
    
    
    return (
        <>
            <h1>My Friends: </h1>
            <Link to="/friends/search">
             <button className="friends__searchBtn" >Add a Friend</button>
             </Link>
            {matchingFriends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
        </>
    )
}

// This module provides data taken from the friend provider, then
// passes it to FriendCard, then renders FriendCard for each friend.