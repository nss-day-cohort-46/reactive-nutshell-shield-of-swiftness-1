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

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const editEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
        })
          .then(getEvents)
      }

      const getEventByUserId = (userId) => {
        return fetch(`http://localhost:8088/events/${userId}?_expand=userId`)
            .then(res => res.json())
    }

    return (
        <EventContext.Provider value ={{
            events, getEvents, addEvent, deleteEvent, editEvent, getEventByUserId
        }}>
            {props.children}
        </EventContext.Provider>
    )
}