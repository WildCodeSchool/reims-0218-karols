import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import { Col, Row } from "reactstrap"

const ListChoicePrestation = () => (
  <Row className="text-center">
    <Col xs="12" md="6" lg="3">
      <ChoicePrestation />
    </Col>
    <Col xs="12" md="6" lg="3">
      <ChoicePrestation />
    </Col>
    <Col xs="12" md="6" lg="3">
      <ChoicePrestation />
    </Col>
    <Col xs="12" md="6" lg="3">
      <ChoicePrestation />
    </Col>
  </Row>
)

export default ListChoicePrestation
