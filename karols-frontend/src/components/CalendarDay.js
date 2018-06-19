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

console.log(
  DateTime.fromISO("2014-08-06T13:07:04.054")
    .setLocale("fr")
    .toFormat("cccc dd LLLL")
)

class CalendarDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateFormated: formatedDate
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
