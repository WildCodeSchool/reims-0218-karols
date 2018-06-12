import React, { Component } from "react"
import { connect } from "react-redux"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"

import { fetchShopsPrestations } from "../api"

class Page extends Component {
  render() {
    return <div>Page</div>
  }
  componentDidMount() {
    //TODO fetch shopsandprestations
    fetchShopsPrestations().then(response => {
      // dispatch SHOPS_PRESTATIONS_RECEIVED
      console.log(response)
    })
  }
}

export default Page
