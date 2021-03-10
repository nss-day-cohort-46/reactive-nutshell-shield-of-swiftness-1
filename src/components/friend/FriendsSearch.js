import React, { useContext, useState, useEffect } from "react"
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UserProvider"
import { FriendCard } from "./FriendsCard"


export const FriendsSearch = () => {
  const { friends, getFriends } = useContext(FriendsContext)
  const [filteredUsers, setFilteredFriends] = useState([])
  const { searchTerms, setSearchTerms, users, getUsers } = useContext(UsersContext)

    
  useEffect(() => {
      getUsers()
      .then(getFriends())
  }, [])

  useEffect(() => {
      if(searchTerms !== ""){
        //   I want to filter users array based on whats in the search terms
        let subSet = users.filter(user => user.name.includes(searchTerms)) 
        // I want to set the state variable to what the .filter returns
        setFilteredFriends(subSet) 
      } else {
        //   what is in the parenthesis is what you are setting filtered users to be 
          (setFilteredFriends([]))

      }
  }, [searchTerms])

  return (
    <>
      Friend search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an Friend... " />
        {filteredUsers.map(user => <FriendCard key={user.id} friend={user} />)}

        {console.log(filteredUsers)}
        
    </>
  )
}