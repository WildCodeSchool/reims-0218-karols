import React, { Component } from "react"
import { connect } from "react-redux"
import { Jumbotron, Button, Alert } from "reactstrap"

import {
  getSelectedShop,
  getSelectedService,
  getSelectedGender,
  getSelectedForm,
  getSelectedPreparations
} from "../resume"

import { fetchCreateReservation } from "../api/fetchCreateReservation"

const mapStateToProps = state => ({
  showAlert: state.reservation.success,
  selectedShop: getSelectedShop(state),
  selectedService: getSelectedService(state),
  selectedGender: getSelectedGender(state),
  selectedForm: getSelectedForm(state),
  selectedPreparations: getSelectedPreparations(state)
})

class ShowResume extends Component {
  constructor(props) {
    super(props)
    this.showAlert = this.showAlert.bind(this)

    this.state = {
      visibility: false
    }
  }

  showAlert() {
    this.setState(prevState => {
      return {
        visibility: true
      }
    })
  }

  render() {
    return (
      <Jumbotron
        style={{
          marginTop: "2em",
          textAlign: "center",
          backgroundColor: "#FFF",
          fontSize: "25px",
          borderRadius: "70px",
          border: "2px solid black"
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
          <p className="form">Prénom :{this.props.selectedForm.firstName}</p>
        )}
        {this.props.selectedForm && (
          <p className="form">Nom :{this.props.selectedForm.lastName}</p>
        )}
        {this.props.selectedForm && (
          <p className="form">Email :{this.props.selectedForm.email}</p>
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

            // <p className="horaire">
            //   Vous désirez être pris en charge le {horaire}{" "}
            // </p>
          })}
        <Button
          outline
          color="secondary"
          onClick={() => {
            this.showAlert()

            fetchCreateReservation({
              selectedShop: this.props.selectedShop,
              selectedService: this.props.selectedService,
              selectedGender: this.props.selectedGender,
              selectedForm: this.props.selectedForm,
              selectedPreparations: this.props.selectedPreparations
            }).then(data => {
              console.log(data)
            })
          }}
        >
          {/* {this.props.showAlert && <Alert> Blabla </Alert> */}
          Creer cette réservation
        </Button>{" "}
        {this.state.visibility && (
          <Alert
            color="success"
            style={{
              marginTop: "30px"
            }}
          >
            {" "}
            Vous avez reçu un mail de confirmation sur{" "}
            {this.props.selectedForm.email}{" "}
          </Alert>
        )}
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, null)(ShowResume)
