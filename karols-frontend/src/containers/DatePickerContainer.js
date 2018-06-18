import React, { Component } from "react"
import InfiniteCalendar from "react-infinite-calendar"
import "react-infinite-calendar/styles.css" // Make sure to import the default stylesheet
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col
} from "reactstrap"

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
    this.state = { date: new Date() }
    this.state = {
      dd1: false,
      modal1: false
    }
    this.dropdownToggle = this.dropdownToggle.bind(this)
  }

  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    })
  }
  closeModal(tabId) {
    this.setState({
      [tabId]: false
    })
  }
  showModal(modal) {
    this.setState({
      [modal]: true
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="justify-content-center">
        <Container>
          <Button onClick={this.showModal.bind(this, "modal1")}>
            Choisir une date
          </Button>
          <Modal
            isOpen={this.state.modal1}
            toggle={this.closeModal.bind(this, "modal1")}
          >
            <ModalHeader toggle={this.closeModal.bind(this, "modal1")}>
              <InfiniteCalendar
                onSelect={date => {
                  this.setState({
                    dateSelected: date
                  })
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
            </ModalHeader>
          </Modal>
        </Container>
      </div>
    )
  }
}

export default DatePickerSelect
