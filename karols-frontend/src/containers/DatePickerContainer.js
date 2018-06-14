import React, { Component } from "react"
import InfiniteCalendar from "react-infinite-calendar"
import "react-infinite-calendar/styles.css" // Make sure to import the default stylesheet

// Render the Calendar
let today = new Date()
let lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
)

class DatePickerSelect extends Component {
  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })
  onSelect = date => this.setState({ date })

  render() {
    return (
      <div className="justify-content-center">
        <InfiniteCalendar
          onSelect={function(date) {
            console.log(date)
          }}
          style={{ margin: "auto" }}
          width={300}
          height={300}
          selected={today}
          disabledDays={[0, 7]}
          minDate={lastWeek}
          displayOptions={{
            showHeader: true,
            overscanMonthCount: 4,
            showWeekdays: true,
            shouldHeaderAnimate: true
          }}
          locale={{
            weekStartsOn: 1,
            locale: require("date-fns/locale/fr"),
            headerFormat: "dddd, D MMM",
            weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            blank: "Aucune date sélectionnée",
            todayLabel: {
              long: "Aujourd'hui",
              short: "Auj."
            }
          }}
          theme={{
            selectionColor: "rgb(146, 118, 255)",
            textColor: {
              default: "#333",
              active: "#FFF"
            },
            weekdayColor: "rgb(146, 118, 255)",
            headerColor: "rgb(127, 95, 251)",
            floatingNav: {
              background: "rgba(81, 67, 138, 0.96)",
              color: "#FFF",
              chevron: "#FFA726"
            }
          }}
        />
      </div>
    )
  }
}

export default DatePickerSelect
