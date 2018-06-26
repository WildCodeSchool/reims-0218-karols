import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import { fetchDateSelected } from "../api/fetchDateSelected"
import { showFourFirstTimeSlots } from "../display/index"

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
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
  }
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
  seeMoreTimeSlots = () => {
    this.setState({
      showMore: !this.state.showMore
    })
  }
  render() {
    return (
      <Container>
        <ResultCalendar
          handleMinusClick={this.handleMinusClick}
          weekTimeSlots={showFourFirstTimeSlots(
            this.props.timeSlots,
            this.state.showMore
          )}
          handlePlusClick={this.handlePlusClick}
          selectTimeSlot={this.props.onTimeSlotSelected}
        />
        <div className="availabilities-more-button mt-3">
          <Button
            onClick={() => this.seeMoreTimeSlots()}
            outline
            color="secondary"
          >
            {this.state.showMore
              ? "Voir moins d'horaires"
              : "Voir plus d'horaires"}
          </Button>
        </div>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
