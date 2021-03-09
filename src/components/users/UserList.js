import React, { useContext, useEffect } from "react"
import { UsersContext } from "./UsersProvider"


import { UserCard } from "./UserCard"
import { FriendsContext } from "./friend/FriendProvider";


export const UserList = () => {

    const { filteredUsers, setFilteredUsers } = useContext(FriendsContext)
    const { users, getUsers } = useContext(UsersContext)

    useEffect(() => {
        getFriends()
        .then(getUsers)
    }, [])

    useEffect(() => {
        getUsers()
    }, [users])

    return (
        <>
            <h1>Users:</h1>
            <div className="users">
                {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}

// This module provides data taken from the user provider,
//  in order to search through all users