import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import { makeTimeslotsReceived } from "../actions/actions"

import ResultCalendar from "../components/ResultCalendar"

const mapStateToProps = state => ({
  timeSlots: state.timeSlots
})

const mapDispatchToProps = dispatch => ({
  onTimeSlotsReceived: response => dispatch(makeTimeslotsReceived(response))
})

class TimeSlots extends Component {
  render() {
    return (
      <Container>
        <ResultCalendar weekTimeSlots={this.props.timeSlots} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
