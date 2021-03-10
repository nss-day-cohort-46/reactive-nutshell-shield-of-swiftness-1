import React, { useState, createContext } from "react"

export const EventContext = createContext()

// export const sortEvents = () => {
//     const sortedEvents = events.sort(
//         (olderEvent, recentEvent) =>
//             Date.parse(olderEvent.date) - Date.parse(recentEvent.date)
//     )
//     return sortedEvents
// }

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(setEvents)
    }

    const sortedEvents = events.sort(
        (olderEvent, recentEvent) =>
            Date.parse(olderEvent.date) - Date.parse(recentEvent.date)

            )

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

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    return (
        <EventContext.Provider value ={{
            sortedEvents, getEvents, addEvent, deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}