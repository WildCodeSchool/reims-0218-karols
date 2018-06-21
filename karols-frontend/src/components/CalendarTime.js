import React from "react"
import { DateTime } from "luxon"

const transformTimeSlot = timeSlot =>
  DateTime.fromISO(timeSlot.time.s)
    .setLocale("fr")
    .toFormat("T")

const CalendarTime = ({ timeSlot, selectTimeSlot }) => {
  //function timeslot.time.s
  return (
    <div
      className="justify-content-center"
      onClick={() => selectTimeSlot(timeSlot)}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "4px",
          width: "100%",
          textAlign: "center",
          margin: "10px 0",
          height: "34px",
          lineHeight: "34px",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          backgroundColor: "#ccecfa"
        }}
      >
        {" "}
        {transformTimeSlot(timeSlot)}{" "}
      </div>
    </div>
  )
}

export default CalendarTime
