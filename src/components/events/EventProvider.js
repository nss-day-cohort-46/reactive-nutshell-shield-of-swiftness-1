import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(setEvents)
    }

    return (
        <EventContext.Provider value ={{
            events, getEvents
        }}>
            {props.children}
        </EventContext.Provider>
    )
}