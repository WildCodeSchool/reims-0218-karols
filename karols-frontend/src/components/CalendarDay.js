import React from "react"
import { DateTime } from "luxon"

const transformDate = date =>
  DateTime.fromISO(date)
    .setLocale("fr")
    .toFormat("dd LLLL")

const transformDay = date =>
  DateTime.fromISO(date)
    .setLocale("fr")
    .toFormat("cccc")

const CalendarDay = ({ date }) => (
  <div
    style={{
      textAlign: "center",
      marginBottom: "24px",
      fontSize: "13px",
      color: "#435f71"
    }}
  >
    <p style={{ fontWeight: "700" }} />
    <p
      style={{
        textAlign: "center",
        marginBottom: "24px",
        fontSize: "12px"
      }}
    >
      {transformDay(date)}
      <br />
      {transformDate(date)}
    </p>
  </div>
)

export default CalendarDay
