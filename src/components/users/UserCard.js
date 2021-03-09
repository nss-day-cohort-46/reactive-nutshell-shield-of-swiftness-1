import React, { useContext } from "react"
 import { FriendsContext } from "../friends/FriendsProvider"
 import { UsersContext } from "./UsersProvider"


export const UserCard = ({ user }) => {
    const { addFriends } = useContext(FriendsContext)
    const { getUsers } = useContext(UsersContext)


    const handleClickAddFriend = (event) => {
        const currentUserId = parseInt(sessionStorage.nutshell_user)
        const newFriend = {
            currentUserId: currentUserId,
            userId: user.id
        }
        addFriends(newFriend)
        .then(getUsers)
    }

    return (
        <div className="user">
        <h3>{user.name}</h3>
        {user.isFriends ? <button className="btn--delete">Remove</button> : <button className="btn--save" onClick={handleClickAddFriend}>Add</button>}
        <div>Friends? {user.isFriends ? "yes" : "no"} </div>
        </div>
    )
}