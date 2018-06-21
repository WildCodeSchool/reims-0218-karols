import React from "react"
import CalendarTime from "./CalendarTime"

const ListCalendarTime = ({ timeSlots }) => (
  <div
    style={{
      display: "block"
    }}
  >
    {timeSlots.map((timeSlot, index) => (
      <CalendarTime timeSlot={timeSlot} key={index} />
    ))}
  </div>
)

export default ListCalendarTime
