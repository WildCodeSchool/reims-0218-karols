import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

import {
  makeChooseSex,
  makeIncrementSex,
  makeDecrementSex
} from "../actions/actions"
import GenderTitle from "../components/GenderTitle"
import CardModelGender from "../components/CardModelGender"
import { showCounter } from "../display"

// Pour la connection avec les compteurs
// ajouter handlePlus et handleMInus dans le mapDispatchToProps
// les passer à CardModel

const mapStateToProps = state => ({
  genders: state.genders,
  showCounter: state.showCounter
})

const mapDispatchToProps = dispatch => ({
  select: sex => dispatch(makeChooseSex(sex)),
  handlePlus: sex => dispatch(makeIncrementSex(sex)),
  handleMinus: sex => dispatch(makeDecrementSex(sex))
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
      <div>
        <GenderTitle />
        <Row className="justify-content-center">
          {this.props.genders.map(gender => (
            <Col key={gender.sex} md="6" className="text-center mb-3">
              <Zoom>
                <CardModelGender
                  id={gender.sex}
                  select={this.props.select}
                  {...gender}
                  showCounter={showCounter}
                />
              </Zoom>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelect)
