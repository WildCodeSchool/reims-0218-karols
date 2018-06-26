import React, { Component } from "react"
import { DateTime } from "luxon"
import { connect } from "react-redux"
import { Jumbotron, Button, Alert } from "reactstrap"
import Recaptcha from "react-grecaptcha"

import { makeSuccessReservation } from "../actions/actions"
import {
  getSelectedShop,
  getSelectedService,
  getSelectedGender,
  getSelectedForm,
  getSelectedPreparations,
  getSelectedTimeSlot
} from "../resume"

import { fetchCreateReservation } from "../api/fetchCreateReservation"
import ContactForm from "../components/ContactForm"

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
  constructor(props) {
    super(props)
    this.state = {
      validCaptcha: false
    }
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  verifyCallback() {
    this.setState({
      validCaptcha: true
    })
  }

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
        {this.props.selectedForm && (
          <p className="form">Prénom : {this.props.selectedForm.firstName}</p>
        )}
        {this.props.selectedForm && (
          <p className="form">Nom : {this.props.selectedForm.lastName}</p>
        )}
        {this.props.selectedForm && (
          <p className="form">Email : {this.props.selectedForm.email}</p>
        )}
        {this.props.selectedGender && (
          <p className="gender">Pour {this.props.selectedGender.sex}</p>
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
        )}
        <Recaptcha
          sitekey={"6LenQWAUAAAAAPa99VtqSlKXvI_uNBqZA5XyD-hQ"}
          callback={this.verifyCallback}
          expiredCallback={() => console.log("expiredcaptcha")}
          locale="fr-FR"
          className="customClassName"
          data-theme="grey"
          style={{
            display: "table",
            margin: "0 auto",
            paddingBottom: "30px"
          }}
        />
        <Button
          disabled={!this.state.validCaptcha}
          outline
          color="secondary"
          onClick={() => {
            return fetchCreateReservation({
              selectedShop: this.props.selectedShop,
              selectedService: this.props.selectedService,
              selectedGender: this.props.selectedGender,
              selectedForm: this.props.selectedForm,
              selectedPreparations: this.props.selectedPreparations
            }).then(data => {
              this.props.success()
            })
          }}
        >
          Creer cette réservation
        </Button>{" "}
        {this.props.showAlert && (
          <Alert
            style={{
              marginTop: "30px"
            }}
          >
            {" "}
            Vous avez reçu un mail de confirmation{" "}
          </Alert>
        )}
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ShowResume)
