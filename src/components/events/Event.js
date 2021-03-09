import React from "react"
// import { Link } from "react-router-dom"

export const EventCard = ({event}) => {
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
        </section>
    )
}