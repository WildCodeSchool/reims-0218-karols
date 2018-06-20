import React from "react"
import CalendarTime from "./CalendarTime"

const ListCalendarTime = ({ times }) => (
  <div
    style={{
      display: "block"
    }}
  >
    {times.map(timeArray =>
      timeArray.map(timeSlot => <CalendarTime time={timeSlot} />)
    )}
  </div>
)

export default ListCalendarTime
