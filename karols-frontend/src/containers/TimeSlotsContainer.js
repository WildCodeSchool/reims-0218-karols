import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import {} from "../display"

import { makeTimeslotsReceived } from "../actions/actions"

import { fetchTimeSlots } from "../api/fetchtimeslots"
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
        <ResultCalendar />
        {this.props.timeSlots.map(timeSlot => <p>{timeSlot.date}</p>)}
      </Container>
    )
  }
  componentDidMount() {
    fetchTimeSlots().then(response => {
      this.props.onTimeSlotsReceived(response)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
