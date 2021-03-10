import React, { useState, createContext, useEffect } from "react"

// The context is imported and used by individual components that need data
export const UsersContext = createContext()

// This component establishes what data can be used.
export const UsersProvider = (props) => {

    const [users, setUsers] = useState([])
    // use the useState() hook to define a variable that holds the state of the component, and a function that updates it

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    return (
        <UsersContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

// This module provides a user data to the app.

