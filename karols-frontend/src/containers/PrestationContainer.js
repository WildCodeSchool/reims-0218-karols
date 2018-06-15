import React, { Component } from "react"
import { connect } from "react-redux"
import ChoicePrestation from "../components/ChoicePrestation"
import { fetchPrestation } from "../api"
import { makePrestationsReceived } from "../actions/actions"
import { scroller } from "react-scroll"

const mapStateToProps = state => ({
  prestations: state.prestations
})

const mapDispatchToProps = dispatch => ({
  onPrestationsReceived: response => dispatch(makePrestationsReceived(response))
})

class PrestationWrap extends Component {
  componentDidMount() {
    scroller.scrollTo("prestations")
  }
  render() {
    return (
      <div>
        {this.props.prestations.map(prestation => {
          return (
            <ChoicePrestation
              name={prestation.name}
              key={prestation.id}
              id={prestation.id}
              imgSrc={prestation.image}
            />
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    fetchPrestation().then(prestations =>
      this.props.onPrestationsReceived(prestations)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrestationWrap)
