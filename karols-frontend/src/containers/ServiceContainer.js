import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { scroller } from "react-scroll"

import CardModel from "../components/CardModel"
import ReservationTitle from "../components/ReservationTitle"
import { makeChooseService } from "../actions/actions"

const mapStateToProps = state => ({
  services: state.services
})

const mapDispatchToProps = dispatch => ({
  select: serviceId => dispatch(makeChooseService(serviceId))
})

class ServiceSelect extends Component {
  componentDidMount() {
    scroller.scrollTo("services")
  }
  render() {
    return (
      <div>
        <ReservationTitle />
        <Row className="justify-content-center">
          {this.props.services.map(service => (
            <Col md="6" className="text-center mb-3">
              <CardModel
                key={service.id}
                title={service.name}
                {...service}
                select={this.props.select}
              />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSelect)
