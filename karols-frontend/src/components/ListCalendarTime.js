import React from "react"
import CalendarTime from "./CalendarTime"

const ListCalendarTime = ({ time }) => (
  <div
    style={{
      display: "block"
    }}
  >
    <CalendarTime time={time} />
    <CalendarTime time={time} />
    <CalendarTime time={time} />
    <CalendarTime time={time} />
  </div>
)

export default ListCalendarTime
