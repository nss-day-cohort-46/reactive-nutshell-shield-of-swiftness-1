import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventCard = ({event}) => {

    const { deleteEvent } = useContext(EventContext)

    const handleDelete = () => {
        deleteEvent(event.id)
    }

    return (
        <section className="event">
            <h5 className="event__name">
                {event.name}
            </h5>
            <div className="event__date">{event.date}</div>
            <div className="event__location">{event.location}</div>
            <button className="event__delete"
            onClick={handleDelete}>Delete Event</button>
        </section>
    )
}