import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"

export const EventList = () => {
    
    const { events, getEvents } = useContext(EventContext)

    const history = useHistory()

    // const sortedEvents = events.slice().sort((a, b) => a.date - b.date)

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
                        events.map(eventObj => {
                            return <EventCard key={eventObj.id} event={eventObj} />
                        })
                    }

                </div>
            </div>
        </>
    )
}