import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import { Col, Row } from "reactstrap"

const ListChoicePrestation = () => (
  <Row>
    <Col xs="3">
      <ChoicePrestation />
    </Col>
    <Col xs="3">
      <ChoicePrestation />
    </Col>
    <Col xs="3">
      <ChoicePrestation />
    </Col>
    <Col xs="3">
      <ChoicePrestation />
    </Col>
  </Row>
)

export default ListChoicePrestation
