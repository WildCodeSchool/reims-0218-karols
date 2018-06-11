import React, { Component } from "react"
import { connect } from "react-redux"
import ChoicePrestation from "../components/ChoicePrestation"
import { fetchPrestation } from "../api"
import { makeChoosePrestation } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestations
})

const mapDispatchToProps = dispatch => ({
  onPrestationsReceived: prestationId =>
    dispatch(makeChoosePrestation(prestationId))
})

export class PrestationWrap extends Component {
  render() {
    return (
      <div>
        {this.props.prestations.map(prestation => {
          return (
            <ChoicePrestation
              title={prestation.name}
              key={prestation.id}
              image={prestation.image}
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
