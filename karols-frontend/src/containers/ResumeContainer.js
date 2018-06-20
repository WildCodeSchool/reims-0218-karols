import React, { Component } from "react"
import { connect } from "react-redux"
import { Jumbotron } from "reactstrap"

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
      <Jumbotron
        style={{
          textAlign: "center",
          backgroundColor: "#d7dbe2",
          fontSize: "25px",
          borderRadius: "100px"
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
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, null)(ShowResume)
