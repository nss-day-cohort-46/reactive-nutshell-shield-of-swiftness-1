import React, { useContext, useState, useEffect } from "react"
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UserProvider"
import { FriendCard } from "./FriendsCard"


export const FriendsSearch = () => {
  const { friends, getFriends } = useContext(FriendsContext)
  const [filteredUsers, setFilteredFriends] = useState([])
  const { users, getUsers } = useContext(UsersContext)
  const [searchTerms, setSearchTerms] = useState("")



    useEffect(() => {
        getUsers().then(() => {
          //   I want to filter users array based on whats in the search terms
          /* check to see if the search bar has something typed into it  */
        if (searchTerms !== "") {
          /*  if it does, convert it to lowercase letters. convert the user names to lowercase letters. see if the search term is found in the user names */
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            // I want to set the state variable to what the .filter returns
            setFilteredFriends(subset)
            //   what is in the parenthesis is what you are setting filtered users to be 
        }
        })
    }, [searchTerms])

  return (
    <>
      <h2>User Search :</h2>
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an Friend... " />
        {filteredUsers.map(user => <FriendCard key={user.id} friend={user} />)}

        {console.log(filteredUsers)}
        
    </>
  )
}