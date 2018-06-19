import React, { Component } from "react"
import { DateTime } from "luxon"

const myDate = DateTime.fromObject({
  day: 19,
  month: 6,
  hour: 9,
  minute: 0,
  year: 2018
})

const newFormat = Object.assign({ weekday: "long" }, DateTime.DATE_HUGE)

const formatedDate = myDate.toLocaleString(newFormat)

const myNewDate = DateTime.fromISO("2018-06-19T13:00:00.054")
  .setLocale("fr")
  .toFormat("cccc dd LLLL")

class CalendarDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateFormated: myNewDate
    }
    console.log(this.state)
  }
  render() {
    return (
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
          {this.state.dateFormated}
        </p>
      </div>
    )
  }
}

export default CalendarDay
