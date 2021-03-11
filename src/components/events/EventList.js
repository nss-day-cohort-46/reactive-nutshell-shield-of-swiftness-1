import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import "./Event.css"

export const EventList = () => {
    
    const { events, getEvents } = useContext(EventContext)
    const [sortedEvents, setEvents] = useState([])
    let eventCounter = 0

    // const currentUserId = +sessionStorage.getItem("nutshell_user")

    const history = useHistory()

    useEffect(() => {
        getEvents()
    }, [])
        

    useEffect(() => {
        const theSortedEvents = events.slice().sort(
            (futureEvent, nextEvent) => {
                
                const otherEvent = new Date(futureEvent.date)
                const upcomingEvent = new Date(nextEvent.date)


                return otherEvent - upcomingEvent
                
            })
        setEvents(theSortedEvents)
    }, [events])

    return (
        <>
            <h2>Upcoming Events</h2>
            <div className="events__page">

            <button className="event__add" onClick={() => {history.push("/events/create")}}>Add New Event</button>
                <div>
                    {
                        sortedEvents.map(eventObj => {
                            
                            eventCounter++
                            

                            return <EventCard key={eventObj.id} event={eventObj} counter={eventCounter} />
                        })
                    }

                </div>
            </div>
        </>
    )
}