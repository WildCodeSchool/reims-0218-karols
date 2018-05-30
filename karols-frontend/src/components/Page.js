import React, { Component } from "react"
import Header from "./Header"
import ReservationTitle from "./ReservationTitle"
import ListChoiceService from "./ListChoiceService"
import ResultCalendar from "./ResultCalendar"
import ListChoiceGender from "./ListChoiceGender"
import { Container, Row, Col } from "reactstrap"
import PrestationLabel from "./PrestationLabel"
import ListChoicePrestation from "./ListChoicePrestation"
import SelectClient from "./SelectClient"
import InfoClient from "./InfoClient"
import Footer from "./Footer"
import ValidationReservationButton from "./ValidationReservationButton"

class Page extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <Header />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center mt-1 mb-3">
            <ReservationTitle />
          </Col>
        </Row>
        <ListChoiceService />
        <hr />
        <Row>
          <Col className="text-center">
            <ListChoiceGender />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <PrestationLabel />
          </Col>
        </Row>
        <ListChoicePrestation />
        <hr />
        <Row>
          <Col className="text-center">
            <SelectClient />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <InfoClient />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ResultCalendar />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ValidationReservationButton />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Footer />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Page
