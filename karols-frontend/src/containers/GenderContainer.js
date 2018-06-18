import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import { makeChooseSex } from "../actions/actions"
import GenderTitle from "../components/GenderTitle"
import CardModelGender from "../components/CardModelGender"

const mapStateToProps = state => ({
  genders: state.genders
})

const mapDispatchToProps = dispatch => ({
  select: sex => dispatch(makeChooseSex(sex))
})

class GenderSelect extends Component {
  render() {
    return (
      <div>
        <GenderTitle />
        <Row className="justify-content-center">
          {this.props.genders.map(gender => (
            <Col key={gender.sex} md="6" className="text-center mb-3">
              <CardModelGender
                id={gender.sex}
                {...gender}
                select={this.props.select}
                image={gender.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelect)
