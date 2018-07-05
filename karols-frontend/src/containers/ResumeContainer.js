import React, { Component } from "react"
import { DateTime } from "luxon"
import { connect } from "react-redux"
import { Jumbotron } from "reactstrap"

import { makeSuccessReservation } from "../actions/actions"
import { getReservationData } from "../resume"

const mapDispatchToProps = dispatch => ({
  success: () => {
    dispatch(makeSuccessReservation())
  }
})

const mapStateToProps = state => ({
  showAlert: state.reservation.success,
  reservationData: getReservationData(state)
})

const transformTimeSlot = timeSlot =>
  DateTime.fromISO(timeSlot.time.s)
    .setLocale("fr")
    .toFormat("cccc dd LLLL HH 'h' mm")

class ShowResume extends Component {
  render() {
    const reservationData = this.props.reservationData
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

        {reservationData.shop && (
          <p className="shop">
            Votre réservation se fera à {reservationData.shop.city}
          </p>
        )}
        <hr className="my-2" />
        {(reservationData.service && reservationData.service.id) === 1 && (
          <div>
            {reservationData.service && (
              <p className="préparation">
                Vous avez choisi {reservationData.service.name}
              </p>
            )}
            {reservationData.preparations &&
              reservationData.preparations.map((preparation, index) => {
                return (
                  <p className="prestation" key={index}>
                    {preparation.preparations[0].titlePreparation}
                  </p>
                )
              })}
            {reservationData.timeSlots && (
              <p className="horaire">
                Vous désirez être pris en charge le {""}
                {transformTimeSlot(reservationData.timeSlots)}
              </p>
            )}
          </div>
        )}
        {(reservationData.service && reservationData.service.id) === 2 && (
          <div>
            {reservationData.service && (
              <p className="préparation">
                Vous avez choisi {reservationData.service.name}
              </p>
            )}
            {reservationData.countTable && (
              <p className="count">Vous êtes {reservationData.countTable}</p>
            )}
            {reservationData.timeSlots && (
              <p className="horaire">
                Vous désirez être pris en charge le {""}
                {transformTimeSlot(reservationData.timeSlots)}
              </p>
            )}
          </div>
        )}
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ShowResume)

/* {this.props.selectedShop && (
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
        {this.props.selectedPreparations &&
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
        )} */
