import React from "react"
import ListCalendarTime from "./ListCalendarTime"
import CalendarDay from "./CalendarDay"

const ListCalendarDayTime = ({ day, selectTimeSlot }) => (
  <div
    style={{
      flexGrow: "1",
      flexShrink: "0",
      flexBasis: "0px",
      margin: "0 7px",
      maxWidth: "75px"
    }}
  >
    <CalendarDay date={day.date} />
    <ListCalendarTime
      timeSlots={day.timeSlots}
      selectTimeSlot={selectTimeSlot}
    />
  </div>
)

export default ListCalendarDayTime
