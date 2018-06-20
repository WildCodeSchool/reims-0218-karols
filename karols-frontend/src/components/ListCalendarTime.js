import React from "react"
import CalendarTime from "./CalendarTime"

const ListCalendarTime = ({ timeSlots }) => (
  <div
    style={{
      display: "block"
    }}
  >
    {timeSlots.map(timeSlot => <CalendarTime timeSlot={timeSlot} />)}
  </div>
)

export default ListCalendarTime
