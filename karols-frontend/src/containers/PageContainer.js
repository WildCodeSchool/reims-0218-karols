import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import styles from "../styles/styleKarols.css"

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

import { makeShopsPrestationsReceived } from "../actions/actions"

import { fetchShopsPrestations } from "../api"

const mapStateToProps = state => ({
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
        <ShopContainer />

        {this.props.showServices && <ServiceContainer />}

        {this.props.showSex && <GenderContainer />}

        {this.props.showFemalePrestation && <PrestationFemaleContainer />}

        {this.props.showMalePrestation && <PrestationMaleContainer />}

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
