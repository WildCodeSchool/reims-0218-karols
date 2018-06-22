import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import { fetchDateSelected } from "../api/fetchDateSelected"

import { ButtonGroup, Button } from "reactstrap"
import {
  makeTimeslotsReceived,
  makeChooseSlotReservation
} from "../actions/actions"

import ResultCalendar from "../components/ResultCalendar"
const { DateTime } = require("luxon")

const mapStateToProps = state => ({
  timeSlots: state.timeSlots
})

const mapDispatchToProps = dispatch => ({
  onTimeSlotsReceived: response => dispatch(makeTimeslotsReceived(response)),
  onTimeSlotSelected: timeSlot => dispatch(makeChooseSlotReservation(timeSlot))
})

class TimeSlots extends Component {
  handleMinusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const dateMinusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: -1 })
          .toISODate()
        fetchDateSelected(dateMinusOne).then(response => {
          this.props.onTimeSlotsReceived(response)
        })
      }
    })
  }
  handlePlusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const datePlusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: +1 })
          .toISODate()
        fetchDateSelected(datePlusOne).then(response => {
          this.props.onTimeSlotsReceived(response)
        })
      }
    })
  }
  render() {
    return (
      <Container>
        <ButtonGroup size="lg">
          <Button onClick={() => this.handleMinusClick()}>-</Button>
          <Button onClick={() => this.handlePlusClick()}>+</Button>
        </ButtonGroup>
        <ResultCalendar
          weekTimeSlots={this.props.timeSlots}
          selectTimeSlots={this.props.onTimeSlotSelected}
        />
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
