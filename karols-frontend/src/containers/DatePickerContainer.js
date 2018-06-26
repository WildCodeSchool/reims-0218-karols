import React, { Component } from "react"
import { connect } from "react-redux"
import { makeTimeslotsReceived } from "../actions/actions"
import InfiniteCalendar from "react-infinite-calendar"
import "react-infinite-calendar/styles.css" // Make sure to import the default stylesheet
import DatePickerTitle from "../components/DatePickerTitle"
import { fetchDateSelected } from "../api/fetchDateSelected"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap"
const { DateTime } = require("luxon")

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onTimeSlotsReceived: response => dispatch(makeTimeslotsReceived(response))
})

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
              height: "50px",
              width: "150px",
              marginTop: "50px",
              marginBottom: "50px"
            }}
            onClick={this.showModal.bind(this)}
            outline
            color="secondary"
          >
            Choisir une date
          </Button>
          <Modal isOpen={this.state.modal}>
            <ModalHeader>Choisissez la date de votre prestation</ModalHeader>
            <ModalBody>
              <InfiniteCalendar
                onSelect={date => {
                  this.setState({
                    dateSelected: date
                  })
                  // Fetch route date selected
                  const dateFromJsDate = DateTime.fromJSDate(date).toISO()
                  fetchDateSelected(dateFromJsDate).then(response => {
                    this.props.onTimeSlotsReceived(response)
                  })
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
                  selectionColor: "#110F0F",
                  textColor: {
                    default: "#333",
                    active: "#FFF"
                  },
                  weekdayColor: "#110F0F",
                  headerColor: "#110F0F",
                  floatingNav: {
                    background: "#110F0F",
                    color: "#FFF",
                    chevron: "#110F0F"
                  }
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.closeModal.bind(this)}>
                Valider
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerSelect)
