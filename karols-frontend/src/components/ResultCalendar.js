import React from "react"
import ListCalendarDayTime from "./ListCalendarDayTime"
import { Button } from "reactstrap"

const ResultCalendar = ({
  weekTimeSlots,
  selectTimeSlot,
  handleMinusClick,
  handlePlusClick
}) => {
  return (
    <div className="d-flex justify-content-center">
      <Button size="sm" onClick={() => handleMinusClick()}>
        &lt;
      </Button>
      {weekTimeSlots.map((dayTimeSlot, index) => (
        <ListCalendarDayTime
          key={index}
          day={dayTimeSlot}
          selectTimeSlot={selectTimeSlot}
        />
      ))}
      <Button size="sm" onClick={() => handlePlusClick()}>
        &gt;
      </Button>
    </div>
  )
}

export default ResultCalendar
