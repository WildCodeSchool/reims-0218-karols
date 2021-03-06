import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import { fetchDateSelected } from "../api/fetchDateSelected"
import { showFourFirstTimeSlots } from "../display/index"

import { Button } from "reactstrap"
import {
  makeTimeslotsReceived,
  makeChooseSlotReservation
} from "../actions/actions"
import { getSelectedShop } from "../resume"

import ResultCalendar from "../components/ResultCalendar"
const { DateTime } = require("luxon")

const mapStateToProps = state => ({
  timeSlots: state.timeSlots,
  selectedShop: getSelectedShop(state)
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
      return false
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
      return false
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
          </Button>{" "}
          <div className="phone mt-3">
            {this.props.selectedShop && (
              <p className="shop">
                Si vous ne trouvez aucun crénaux, n'hésitez pas à appeler au{" "}
                {this.props.selectedShop.phone}
              </p>
            )}
          </div>
        </div>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
