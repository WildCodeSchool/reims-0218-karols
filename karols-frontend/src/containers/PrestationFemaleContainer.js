import React, { Component } from "react"
import { connect } from "react-redux"
import ListChoicePrestation from "../components/ListChoicePrestation"
import { makeChoosePrestation } from "../actions/actions"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(prestation => prestation.gender === "F")
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) => {
    dispatch(makeChoosePrestation(prestationId, preparationId))
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
          <ListChoicePrestation {...this.props} />
        </Zoom>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FemaleSelected)
