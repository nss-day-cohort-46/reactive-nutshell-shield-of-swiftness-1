import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Event.css"

export const EventCard = ({event}) => {

    const { deleteEvent, editEvent } = useContext(EventContext)
    
    // const [event, setEvent] = useState({
    //     name: "",
    //     date: "",
    //     location: ""
    // })

    // const [isLoading, setIsLoading] = useState(true);

    // const { eventId } = useParams();
	//   const history = useHistory();

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

            {/* <button className="event__edit"
            onClick={handleEdit}>Edit Event</button> */}
        </section>
    )
}