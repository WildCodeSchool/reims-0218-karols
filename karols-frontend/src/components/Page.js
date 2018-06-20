import React, { Component } from "react"
import Header from "./Header"

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
import PreferredDateChoice from "./PreferredDateChoice"
import CardModel from "./CardModel"

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
          <Col className="text-center mt-1 mb-3" />
        </Row>
        <Row className="justify-content-center">
          <CardModel
            title="Réservation"
            description="Pour la description"
            image="https://cdn.foot-sur7.fr/700x503/articles/2017/11/Nabil%20Fekir%20iconsport_icon_laf_291117_05_34-3.jpg"
          />
          <CardModel
            title="Réservation"
            description="Pour la description"
            image="https://cdn.foot-sur7.fr/700x503/articles/2017/11/Nabil%20Fekir%20iconsport_icon_laf_291117_05_34-3.jpg"
          />
          <CardModel
            title="Réservation"
            description="Pour la description"
            image="https://cdn.foot-sur7.fr/700x503/articles/2017/11/Nabil%20Fekir%20iconsport_icon_laf_291117_05_34-3.jpg"
          />
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <ListChoiceGender />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <PrestationLabel prestationLabelName="Maquillage" />
          </Col>
        </Row>
        <ListChoicePrestation />
        <hr />
        <Row>
          <Col className="text-center">
            <PrestationLabel prestationLabelName="Coiffure" />
          </Col>
        </Row>
        <ListChoicePrestation />
        <hr />
        <Row>
          <Col className="text-center">
            <PrestationLabel prestationLabelName="Ongles" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <ListChoicePrestation />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col className="text-center">
            <PreferredDateChoice />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ResultCalendar />
          </Col>
        </Row>
        <hr />
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
