import React, { Component } from "react"
import { connect } from "react-redux"

import {
  getShopResume,
  getServiceResume,
  getGenderResume,
  getPreparationResume
} from "../resume"

const mapStateToProps = state => ({
  getShopResume: getShopResume(state),
  getServiceResume: getServiceResume(state),
  getGenderResume: getGenderResume(state),
  getPreparationResume: getPreparationResume
})

class ShowResume extends Component {
  render() {
    return <div>coucou</div>
  }
}

export default connect(mapStateToProps, null)(ShowResume)
