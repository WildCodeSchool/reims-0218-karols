import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchShopsPrestations, fetchGendersServices } from "../api"

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
    fetchGendersServices().then(responseGS => {
      console.log(responseGS)
    })
  }
}

export default Page
