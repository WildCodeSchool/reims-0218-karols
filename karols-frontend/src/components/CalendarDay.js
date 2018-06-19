import React from "react"

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
      {date}
    </p>
  </div>
)

export default CalendarDay
