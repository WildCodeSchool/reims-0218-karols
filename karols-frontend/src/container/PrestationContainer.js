import React, { Component } from "react"
import { connect } from "react-redux"
import ChoicePrestation from "../components/ChoicePrestation"
import { fetchPrestation } from "../api"
import { makePrestationsReceived } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestationReceveid
})

const mapDispatchToProps = dispatch => ({
  onPrestationsReceived: prestations =>
    dispatch(makePrestationsReceived(prestations))
})

export class PrestationWrap extends Component {
  render() {
    console.log("ARE WE ACCESSING", this.props.prestations)
    return (
      <div>
        <p>Hello</p>
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
