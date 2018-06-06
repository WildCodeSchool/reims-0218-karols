import React from "react"
import ListCalendarTime from "./ListCalendarTime"
import CalendarTime from "./CalendarDay"

const ListCalendarDayTime = () => (
  <div
    style={{
      flexGrow: "1",
      flexShrink: "0",
      flexBasis: "0px",
      margin: "0 7px",
      maxWidth: "75px"
    }}
  >
    <CalendarTime />
    <ListCalendarTime />
  </div>
)

export default ListCalendarDayTime
