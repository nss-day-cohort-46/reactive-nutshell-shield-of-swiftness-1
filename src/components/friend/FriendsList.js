import React, { useContext, useEffect } from "react"
import { FriendsContext } from "./FriendsProvider"
import { FriendCard } from "./FriendsCard"


export const FriendsList = () => {

    const { filteredFriends, getFriends } = useContext(FriendsContext)

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <>
            <h1>My Friends: </h1>
            {filteredFriends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
        </>
    )
}