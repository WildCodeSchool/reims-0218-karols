import React, { Component } from "react"
import { connect } from "react-redux"

import {
  getSelectedShop,
  getSelectedService,
  getSelectedGender,
  getSelectedPreparations
} from "../resume"

const mapStateToProps = state => ({
  selectedShop: getSelectedShop(state),
  selectedService: getSelectedService(state),
  selectedGender: getSelectedGender(state),
  selectedPreparations: getSelectedPreparations(state)
})

class ShowResume extends Component {
  render() {
    return (
      <div>
        {this.props.selectedShop && <p>{this.props.selectedShop.city}</p>}
        {this.props.selectedService && <p>{this.props.selectedService.name}</p>}
        {this.props.selectedGender && <p>{this.props.selectedGender.sex}</p>}
        {this.props.selectedPreparations &&
          this.props.selectedPreparations.map((preparation, index) => {
            return (
              <p key={index}>{preparation.preparations[0].titlePreparation}</p>
            )
          })}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ShowResume)
