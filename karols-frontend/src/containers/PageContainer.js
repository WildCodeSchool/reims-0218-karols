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
  showForm
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"
import DatePickerContainer from "./DatePickerContainer"
import CalendarContainer from "./CalendarContainer"
import ResumeContainer from "./ResumeContainer"

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
  showCalendar: showCalendar(state)
})

const mapDispatchToProps = dispatch => ({
  onShopsPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

class Page extends Component {
  render() {
    return (
      <Container>
        <ShopContainer />
        <Element name="services">
          {this.props.showServices && <ServiceContainer />}
        </Element>
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
        <ResumeContainer />
        <Element name="form">{this.props.showForm && <ContactForm />}</Element>
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
