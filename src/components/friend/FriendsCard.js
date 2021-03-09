import React from "react"

export const FriendCard = ({friend}) => {
    return ( 
        <h3>{friend.userId.name}</h3>
    )
}