import React, { Component } from "react"
import { DateTime } from "luxon"
import { connect } from "react-redux"
import { Jumbotron } from "reactstrap"

import { makeSuccessReservation } from "../actions/actions"
import {
  getSelectedShop,
  getSelectedService,
  getSelectedGender,
  getSelectedForm,
  getSelectedPreparations,
  getSelectedTimeSlot
} from "../resume"

const mapDispatchToProps = dispatch => ({
  success: () => {
    dispatch(makeSuccessReservation())
  }
})

const mapStateToProps = state => ({
  showAlert: state.reservation.success,
  selectedShop: getSelectedShop(state),
  selectedService: getSelectedService(state),
  selectedGender: getSelectedGender(state),
  selectedForm: getSelectedForm(state),
  selectedPreparations: getSelectedPreparations(state),
  selectedTimeSlot: getSelectedTimeSlot(state)
})

const transformTimeSlot = timeSlot =>
  DateTime.fromISO(timeSlot.time.s)
    .setLocale("fr")
    .toFormat("cccc dd LLLL HH 'h' mm")

class ShowResume extends Component {
  render() {
    return (
      <Jumbotron
        style={{
          marginTop: "2em",
          textAlign: "center",
          backgroundColor: "#F7F7F7",
          fontSize: "25px",
          borderRadius: "70px",
          border: "2px solid #797979"
        }}
      >
        <h1 className="display-12">Récapitulatif</h1>
        {this.props.selectedShop && (
          <p className="shop">
            Votre réservation se fera à {this.props.selectedShop.city}
          </p>
        )}
        <hr className="my-2" />
        {this.props.selectedService && (
          <p className="préparation">
            Vous avez choisi {this.props.selectedService.name}
          </p>
        )}
        {this.props.selectedService &&
          (this.props.selectedService.id === 1 &&
            this.props.selectedPreparations) &&
          this.props.selectedPreparations.map((preparation, index) => {
            return (
              <p className="prestation" key={index}>
                {preparation.preparations[0].titlePreparation}
              </p>
            )
          })}
        {this.props.selectedService &&
          (this.props.selectedService.id === 3 &&
            this.props.selectedPreparations) &&
          this.props.selectedPreparations.map((preparation, index) => {
            return (
              <p className="prestation" key={index}>
                {preparation.preparations[0].titlePreparation}
              </p>
            )
          })}

        {this.props.selectedTimeSlot && (
          <p className="horaire">
            Vous désirez être pris en charge le {""}
            {transformTimeSlot(this.props.selectedTimeSlot)}
          </p>
        )}
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ShowResume)
