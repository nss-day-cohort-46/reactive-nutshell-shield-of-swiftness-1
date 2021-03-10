import React, { useEffect, useContext } from "react"
import { FriendsContext } from "./FriendsProvider"

export const FriendCard = ({friend}) => {

  const { friends, getFriends, removeFriend } = useContext(FriendsContext)

  useEffect(() => {
    getFriends()
  }, [])

  // const history = useHistory()
  
  const handleRelease = (event) => {
    const [prefix, id] = event.target.id.split("--")
    
    let filteredFriend =  friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    let theFilteredFriend = filteredFriend.find(friend => friend.userId === parseInt(id))
    removeFriend(theFilteredFriend.id)
}

  const handleButtons = (friend) => {
      
      let filteredFriend =  friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
      console.log(friend)
      if(filteredFriend.find(friends => friends.userId === friend.id) === undefined){
        return <button>Add Friend</button>
      } else {
        return <button id={`btn--${friend.id}`} onClick={handleRelease}>Remove Friend</button>
      }
  }

  return (
    <div className="friend">
      <div className="friend__name">{friend.name}</div>
      <div className="friend__name">{friend.email}</div>
      {handleButtons(friend)}
    </div>
    
  )
}

// This module provides data taken from the friend provider, then
//  passes it to FriendCard, then renders FriendCard for each friend.