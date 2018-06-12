import React, { Component } from "react"
import { connect } from "react-redux"

import CardModel from "../components/CardModel"
import { makeChooseService } from "../actions/actions"

const mapStateToProps = state => ({
  services: state.services
})

const mapDispatchToProps = dispatch => ({
  select: serviceId => dispatch(makeChooseService(serviceId))
})

class ServiceSelect extends Component {
  render() {
    return (
      <div>
        {this.props.services.map(service => (
          <CardModel
            key={service.id}
            title={service.name}
            {...service}
            select={this.props.select}
          />
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSelect)
