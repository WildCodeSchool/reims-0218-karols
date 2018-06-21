import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation,
  showDatePicker
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"
import DatePickerContainer from "./DatePickerContainer"
import CalendarContainer from "./CalendarContainer"

import { makeShopsPrestationsReceived } from "../actions/actions"

import { fetchShopsPrestations } from "../api"

const mapStateToProps = state => ({
  service: state.services.find(service => service.selected),
  showServices: showServices(state),
  showSex: showSex(state),
  showFemalePrestation: showFemalePrestation(state),
  showMalePrestation: showMalePrestation(state),
  showDatePicker: showDatePicker(state)
})

const mapDispatchToProps = dispatch => ({
  onShopsPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

class Page extends Component {
  render() {
    return (
      <Container>
        <CalendarContainer />
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
