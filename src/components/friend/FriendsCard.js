import React from "react"

export const FriendCard = ({friend}) => {

  return (
    <div className="friend">
      <div className="friend__name">{friend.name}</div>
      <div className="friend__name">{friend.email}</div>
    </div>
    
  )
}

// This module provides data taken from the friend provider, then
//  passes it to FriendCard, then renders FriendCard for each friend.