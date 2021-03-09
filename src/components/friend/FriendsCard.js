import React from "react"

export const FriendCard = ({friend}) => {

  return (
    <div className="friend">
      <div className="friend__name">{friend.user?.name}</div>
    </div>
  )
}

// This module provides data taken from the friend provider, then
//  passes it to FriendCard, then renders FriendCard for each friend.