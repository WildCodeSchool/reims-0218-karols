import React from "react"
import ChoiceGender from "./ChoiceGender"
import { Row, Col } from "reactstrap"

export default class ListChoiceGender extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="6" className="text-center mb-3">
          <ChoiceGender
            gender="Femme"
            image="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4920987ab334960a4d39b9db70555ef5&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
        <Col lg="6" className="text-center">
          <ChoiceGender
            gender="Homme"
            image="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=153fb8f3b75056ae1c47da65bf392afa&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
      </Row>
    )
  }
}
