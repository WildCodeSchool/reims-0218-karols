import React, { Component } from "react"
import { connect } from "react-redux"

import ListChoicePrestation from "../components/ListChoicePrestation"
import { makeChoosePrestation } from "../actions/actions"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

import { showCounter } from "../display"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(
    prestation => prestation.gender === "M"
  ),
  showCounter: showCounter(state)
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) =>
    dispatch(makeChoosePrestation(prestationId, preparationId))
})

class MaleSelected extends Component {
  componentDidMount() {
    scroller.scrollTo("male", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    return (
      <div>
        <Zoom>
          <ListChoicePrestation
            {...this.props}
            showCounter={this.props.showCounter}
          />
        </Zoom>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaleSelected)
