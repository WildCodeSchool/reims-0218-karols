import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import Recaptcha from "react-grecaptcha"
import { connect } from "react-redux"
import { Button, Alert } from "reactstrap"

import { fetchCreateReservation } from "../api/fetchCreateReservation"
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

class ContactForm extends Component {
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
    const { handleSubmit } = this.props
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "10px auto",
          padding: "16px",
          background: "#F7F7F7",
          fontSize: "22px",
          borderRadius: "60px",
          textAlign: "center",
          border: "2px solid grey"
        }}
        className="justify-content-center"
      >
        <h2
          style={{
            background: "#4D4D4D",
            textTransform: "uppercase",
            color: "#797979",
            fontSize: "18px",
            fontWeight: "100",
            padding: "20px",
            borderRadius: "10px",
            margin: "30px"
          }}
        >
          {" "}
          Formulaire de réservation{" "}
        </h2>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="firstName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Prénom
          </label>
          <Field
            name="firstName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="lastName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Nom
          </label>
          <Field
            name="lastName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="email"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Email
          </label>
          <Field
            name="email"
            component="input"
            type="email"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
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
      </form>
    )
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: "contact" // a unique name for this form
})(ContactForm)

export default connect(mapStateToProps, mapDispatchToProps, null)(ContactForm)
