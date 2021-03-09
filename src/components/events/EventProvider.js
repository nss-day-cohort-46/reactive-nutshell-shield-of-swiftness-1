import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(setEvents)
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(response => response.json())
    }

    return (
        <EventContext.Provider value ={{
            events, getEvents, addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}