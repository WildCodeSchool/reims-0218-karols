import React, { Component } from "react"
import { connect } from "react-redux"
import ChoicePrestation from "../components/ChoicePrestation"
import { fetchPrestation } from "../api"
import { makeShopsPrestationsReceived } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestations
})

const mapDispatchToProps = dispatch => ({
  onPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

export class PrestationWrap extends Component {
  render() {
    return (
      <div>
        {this.props.prestations.map(prestation => {
          return (
            <ChoicePrestation
              name={prestation.name}
              key={prestation.id}
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
