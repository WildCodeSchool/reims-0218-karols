import React, { Component } from "react"
import { connect } from "react-redux"
import ListChoicePrestation from "../components/ListChoicePrestation"
import {
  makeChoosePrestation,
  makeIncrementPrestation
} from "../actions/actions"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"
import { showCounter } from "../display"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(
    prestation => prestation.gender === "F"
  ),
  showCounter: showCounter(state)
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) => {
    dispatch(makeChoosePrestation(prestationId, preparationId))
  },
  incrementHandlePlus: (prestationId, preparationId) => {
    dispatch(makeIncrementPrestation(prestationId, preparationId))
  },
  incrementHandleMinus: (prestationId, preparationId) => {
    dispatch(makeIncrementPrestation(prestationId, preparationId))
  }
})

class FemaleSelected extends Component {
  componentDidMount() {
    scroller.scrollTo("female", {
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
            incrementHandleMinus={this.props.incrementHandleMinus}
            incrementHandlePlus={this.props.incrementHandlePlus}
          />
        </Zoom>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FemaleSelected)
