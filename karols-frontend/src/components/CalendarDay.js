import React from "react"

const CalendarDay = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "24px",
        fontSize: "14px",
        color: "#435f71"
      }}
    >
      <p style={{ fontWeight: "700" }}>mercredi</p>
      <p
        style={{
          textAlign: "center",
          marginBottom: "24px",
          fontSize: "14px"
        }}
      >
        {" 6 juin"}
      </p>
    </div>
  )
}

export default CalendarDay
