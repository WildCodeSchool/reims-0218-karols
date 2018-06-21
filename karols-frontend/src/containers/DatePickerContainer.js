import React, { Component } from "react"
import InfiniteCalendar from "react-infinite-calendar"
import "react-infinite-calendar/styles.css" // Make sure to import the default stylesheet
import DatePickerTitle from "../components/DatePickerTitle"
import { fetchDateSelected } from "../api/fetchDateSelected"
import { Button, Modal, ModalHeader, ModalBody, Container } from "reactstrap"
const { DateTime } = require("luxon")

// Render the Calendar
let today = new Date()
let lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
)

class DatePickerSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      modal: false
    }
  }

  closeModal() {
    this.setState({
      modal: false
    })
  }
  showModal() {
    this.setState({
      modal: true
    })
  }

  render() {
    return (
      <div className="justify-content-center">
        <Container>
          <DatePickerTitle />
          <Button
            style={{
              height: "100px",
              width: "200px",
              marginTop: "50px"
            }}
            onClick={this.showModal.bind(this)}
          >
            Choisir une date
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.closeModal.bind(this)}>
            <ModalHeader toggle={this.closeModal.bind(this)}>
              Choisissez la date de votre prestation
            </ModalHeader>
            <ModalBody>
              <InfiniteCalendar
                onSelect={date => {
                  this.setState({
                    dateSelected: date
                  })
                  // Fetch route date selected
                  const dateFromJsDate = DateTime.fromJSDate(date).toISO()
                  console.log(dateFromJsDate)

                  fetchDateSelected(dateFromJsDate)
                }}
                style={{ margin: "auto" }}
                width="100%"
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
            </ModalBody>
          </Modal>
        </Container>
      </div>
    )
  }
}

export default DatePickerSelect
