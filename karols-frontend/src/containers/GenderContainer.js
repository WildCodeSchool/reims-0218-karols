import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

import { makeChooseSex } from "../actions/actions"
import CardModelGender from "../components/CardModelGender"

const mapStateToProps = state => ({
  genders: state.genders
})

const mapDispatchToProps = dispatch => ({
  select: sex => dispatch(makeChooseSex(sex))
})

class GenderSelect extends Component {
  componentDidMount() {
    scroller.scrollTo("genders", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    return (
      <Row className="justify-content-center">
        {this.props.genders.map(gender => (
          <Col key={gender.sex} md="6" className="text-center mb-3">
            <Zoom>
              <CardModelGender
                id={gender.sex}
                select={this.props.select}
                image={gender.image}
              />
            </Zoom>
          </Col>
        ))}
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelect)
