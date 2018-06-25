import React from "react"
import CalendarTime from "./CalendarTime"

const ListCalendarTime = ({ timeSlots, selectTimeSlot }) => (
  <div
    style={{
      display: "block"
    }}
  >
    {timeSlots.map((timeSlot, index) => (
      <CalendarTime
        timeSlot={timeSlot}
        key={index}
        selectTimeSlot={selectTimeSlot}
      />
    ))}
  </div>
)

export default ListCalendarTime
