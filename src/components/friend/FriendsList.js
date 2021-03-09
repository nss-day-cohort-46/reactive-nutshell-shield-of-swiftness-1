import React, { useContext, useEffect } from "react"
import { FriendsContext } from "./FriendsProvider"
import { FriendCard } from "./FriendsCard"


export const FriendsList = () => {

    const { friends, getFriends } = useContext(FriendsContext)

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <>
            <h1>My Friends: </h1>
            {friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
        </>
    )
}

// This module provides data taken from the friend provider, then
// passes it to FriendCard, then renders FriendCard for each friend.