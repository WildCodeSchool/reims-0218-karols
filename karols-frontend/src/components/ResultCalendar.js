import React from "react"
import ListCalendarDayTime from "./ListCalendarDayTime"

const ResultCalendar = ({ weekTimeSlots }) => {
  return (
    <div className="d-flex justify-content-center">
      {weekTimeSlots.map(dayTimeSlot => (
        <ListCalendarDayTime day={dayTimeSlot} />
      ))}
    </div>
  )
}

export default ResultCalendar
