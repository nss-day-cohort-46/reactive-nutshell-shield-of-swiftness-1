// Author: Tracy Depp
// Purpose: Responsible for rendering HTML rep of individual tasks.

import React from "react"


export const Task = ({task}) => (
    <section className="task">
    <div className="task__name">Task: {task.name}</div>
    <div className="task__date">To Be Completed by: {task.date}</div>
    </section>
)