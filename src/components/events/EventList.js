import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"

export const EventList = () => {
    
    const { sortedEvents, getEvents } = useContext(EventContext)

    const history = useHistory()

    useEffect(() => {
        getEvents()
      }, [])

    return (
        <>
            <h2>Upcoming Events</h2>
            <div className="events__page">

            <button onClick={() => {history.push("/events/create")}}>Add New Event</button>
                <div>
                    {
                        sortedEvents.map(eventObj => {
                            return <EventCard key={eventObj.id} event={eventObj} />
                        })
                    }

                </div>
            </div>
        </>
    )
}