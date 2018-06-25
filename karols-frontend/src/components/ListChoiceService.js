import React from "react"
// Component
import ChoiceService from "./ChoiceService"
import { Row, Col } from "reactstrap"
import CardSelected from "./CardSelected"
import CardHover from "./CardHover"

export default class Service extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" className="text-center mb-3">
          <ChoiceService
            name="Préparation"
            description="Description Préparation"
            image="https://images.unsplash.com/photo-1481501940778-c8bb63e376c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=842a2f0d2f40bb7bb59bbdfd78289a0f&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
        <Col lg="4" className="text-center">
          <CardHover
            name="Table + Préparation"
            description="Description Table & Préparation"
            image="https://images.unsplash.com/photo-1466201570621-6dee7c8dbe11?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0eda6a341afd70d53eaca3b17e674fab&auto=format&fit=crop&w=2250&q=80"
          />
        </Col>
        <Col lg="4" className="text-center">
          <CardSelected
            name="Table"
            description="Description Table"
            image="https://images.unsplash.com/uploads/1412198485051133af17f/5049dacb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dddba89812ed0325b966bf07aba683e3&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
      </Row>
    )
  }
}
