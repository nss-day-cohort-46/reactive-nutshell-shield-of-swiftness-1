import React, { useContext, useEffect, useState } from "react"
import { FriendsContext } from "../friends/FriendsProvider"
import { UsersContext } from "./UsersProvider"
import { UserCard } from "./UserCard"


export const UserList = () => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const { filteredFriends, getFriends } = useContext(FriendsContext)

    const { users, getUsers } = useContext(UsersContext)

    useEffect(() => {
        getFriends()
        .then(getUsers)
    }, [])
    

    useEffect(() => {
        setFilteredUsers(filterUsers())
    }, [users])
    
    const filterUsers = () => {
        let isFriends = false
        return users.filter(user => {
            const friendCheck = filteredFriends.find(f => f.userId === user.id)
            if ( friendCheck !== undefined) {
                user.isFriends = true
            } else {
                user.isFriends = isFriends
            }
            return user.id !== parseInt(sessionStorage.nutshell_user)})
    }

    return (
        <>
            <h1>Users:</h1>
            <div className="users">
                {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}