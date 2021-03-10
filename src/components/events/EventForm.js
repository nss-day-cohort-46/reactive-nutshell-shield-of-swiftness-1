import React, { useContext, useState, useEffect } from "react"
import { useHistory, } from 'react-router-dom'
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventForm = () => {

    const { addEvent, getEvents } = useContext(EventContext)

    const [event, setEvent] = useState({
        name: "",
        date: "",
        location: "",
    });

    // const { eventId } = useParams();
    const history = useHistory();


    
    // input fields in new event form to change

    const handleControlledInputChange = (e) => {
        const newEvent = { ...event }

        let inputValue = e.target.value

        if (e.target.id.includes("Id")) {
            inputValue = parseInt(inputValue)
        }

        newEvent[e.target.id] = inputValue

        setEvent(newEvent)
    }

    // save function to save event

    const handleSaveEvent = (e) => {
        e.preventDefault()

        if (event.name === "" || event.date === "" || event.location === "") {
            window.alert("Please complete the field")
        } else {
            addEvent(event)
            .then(() => history.push("/events"))
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Add a New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Event name"
                    onChange={handleControlledInputChange}
                    value={event.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Event date:</label>
                    <input type="date" id="date" required className="form-control" 
                    onChange={handleControlledInputChange}
                    value={event.date}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event location:</label>
                    <input type="text" id="location" required className="form-control" placeholder="Event location"
                    onChange={handleControlledInputChange}
                    value={event.location}/>
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleSaveEvent}>
                Save New Event
            </button>
        </form>
    )
}