import React, { Component } from "react"
import { connect } from "react-redux"

import CardModel from "../components/CardModel"
import { makeChoosePrestation } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(prestation => prestation.gender === "M")
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) =>
    dispatch(makeChoosePrestation(prestationId, preparationId))
})

export class PrestationMaleWrap extends Component {
  render() {
    return (
      <div>
        {this.props.prestations.map(prestation => {
          console.log(prestation)
          return (
            <CardModel
              id={prestation.id}
              title={prestation.name}
              image={prestation.image}
              description={prestation.description}
            />
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrestationMaleWrap)
