import React from "react"
import { DateTime } from "luxon"

const transformTimeSlot = timeSlot =>
  DateTime.fromISO(timeSlot.time.s)
    .setLocale("fr")
    .toFormat("T")

const CalendarTime = ({ timeSlot }) => {
  return (
    <div className="justify-content-center">
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
