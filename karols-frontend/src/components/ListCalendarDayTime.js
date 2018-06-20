import React from "react"
import ListCalendarTime from "./ListCalendarTime"
import CalendarDay from "./CalendarDay"

const ListCalendarDayTime = ({ date }) => (
  <div
    style={{
      flexGrow: "1",
      flexShrink: "0",
      flexBasis: "0px",
      margin: "0 7px",
      maxWidth: "75px"
    }}
  >
    <CalendarDay />
    <ListCalendarTime />
    {console.log(date)}
  </div>
)

export default ListCalendarDayTime
