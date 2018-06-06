import React from "react"
import { Col } from "reactstrap"

const CalendarTime = () => {
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
        13:30{" "}
      </div>
    </div>
  )
}

export default CalendarTime
