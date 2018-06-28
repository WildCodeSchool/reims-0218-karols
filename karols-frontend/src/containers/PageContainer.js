import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation,
  showDatePicker,
  showCalendar,
  showForm,
  showCountPeopleTable
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"
import DatePickerContainer from "./DatePickerContainer"
import CalendarContainer from "./CalendarContainer"
import ResumeContainer from "./ResumeContainer"
import CountPeopleTableContainer from "./CountPeopleTableContainer"

import { makeShopsPrestationsReceived } from "../actions/actions"

import { fetchShopsPrestations } from "../api"
import ContactForm from "../components/ContactForm"

const mapStateToProps = state => ({
  showServices: showServices(state),
  showSex: showSex(state),
  showFemalePrestation: showFemalePrestation(state),
  showMalePrestation: showMalePrestation(state),
  showDatePicker: showDatePicker(state),
  showForm: showForm(state),
  showCalendar: showCalendar(state),
  showCountPeopleTable: showCountPeopleTable(state)
})

const mapDispatchToProps = dispatch => ({
  onShopsPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

// TODO
// Counter component - 0 + props : count, handleMinus, handlePlus
// => dans le storybook avec console log quand je click sur les - +
// le mettre dans un cardModel en footer
// cardModel ajouter une prop showCounter + (count auto), handleMinus, handlePlus

// Redux
// modifier les reducers pour gérer une quantité sur sex et prestation
// créer des actions INCREMENT_SEX / DECREMENT_SEX | INCREMENT_PRESTATION / DECREMENT_PRESTATION
// modifier les reducers
// ajouter la propriété count dans l'initial state pour sex
// ajouter la propriété count pour les prestations dans le json
// handle actions attention on bloque à 0 on met pas de max pour l'instant

// Affichage conditionnel
// on affiche PrestationFemaleContainer si on a au moins 1 dans count F
// on affiche PrestationMaleContainer si on a au moins 1 dans count F
// le faire avec le test (deplacere le test dans un nouveau fichier)

// ENSUITE on connecte dans les containers
// pour la suite gérer les maxs

class Page extends Component {
  render() {
    return (
      <Container>
        <ShopContainer />
        <Element name="services">
          {this.props.showServices && <ServiceContainer />}
        </Element>
        {this.props.showCountPeopleTable && <CountPeopleTableContainer />}
        <Element name="genders">
          {this.props.showSex && <GenderContainer />}
        </Element>
        <Element name="female">
          {this.props.showFemalePrestation && <PrestationFemaleContainer />}
        </Element>
        <Element name="male">
          {this.props.showMalePrestation && <PrestationMaleContainer />}
        </Element>
        {this.props.showDatePicker && <DatePickerContainer />}
        {this.props.showCalendar && <CalendarContainer />}
        <Element name="form">{this.props.showForm && <ContactForm />}</Element>
        <ResumeContainer />
      </Container>
    )
  }
  componentDidMount() {
    //TODO fetch shopsandprestations
    fetchShopsPrestations().then(response => {
      this.props.onShopsPrestationsReceived(response)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
