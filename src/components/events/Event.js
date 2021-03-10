import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
// import { Link } from "react-router-dom"

export const EventCard = ({event}) => {

    const { deleteEvent } = useContext(EventContext)

    const handleDelete = () => {
        deleteEvent(event.id)
    }

    return (
        <section className="event">
            <h3 className="event__name">
                {/* <Link to={`/animals/detail/${event.id}`}>
                { event.name }
                </Link> */}
                {event.name}
            </h3>
            <div className="event__date">{event.date}</div>
            <div className="event__location">{event.location}</div>
            <button className="event__delete"
            onClick={handleDelete}>Delete Event</button>
        </section>
    )
}