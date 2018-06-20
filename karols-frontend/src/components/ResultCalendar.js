import React from "react"
import ListCalendarDayTime from "./ListCalendarDayTime"

const ResultCalendar = ({ weekTimeSlots }) => {
  return (
    <div className="d-flex justify-content-center">
      {weekTimeSlots.map(weekTimeSlot => (
        <ListCalendarDayTime day={weekTimeSlot} />
      ))}
    </div>
  )
}

export default ResultCalendar
