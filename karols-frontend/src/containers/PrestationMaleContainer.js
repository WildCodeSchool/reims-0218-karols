import React, { Component } from "react"
import { connect } from "react-redux"

import ListChoicePrestation from "../components/ListChoicePrestation"
import { makeChoosePrestation } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(prestation => prestation.gender === "M")
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) =>
    dispatch(makeChoosePrestation(prestationId, preparationId))
})

class PrestationMaleContainerWrap extends Component {
  render() {
    return <ListChoicePrestation />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  PrestationMaleContainerWrap
)
