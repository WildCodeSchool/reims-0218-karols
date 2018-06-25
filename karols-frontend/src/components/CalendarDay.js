import React from "react"
import { DateTime } from "luxon"

const transformDate = date =>
  DateTime.fromISO(date)
    .setLocale("fr")
    .toFormat("cccc dd LLLL")

const CalendarDay = ({ date }) => (
  <div
    style={{
      textAlign: "center",
      marginBottom: "24px",
      fontSize: "14px",
      color: "#435f71"
    }}
  >
    <p style={{ fontWeight: "700" }} />
    <p
      style={{
        textAlign: "center",
        marginBottom: "24px",
        fontSize: "14px"
      }}
    >
      {transformDate(date)}
    </p>
  </div>
)

export default CalendarDay
