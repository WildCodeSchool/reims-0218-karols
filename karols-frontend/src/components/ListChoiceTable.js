import React from "react"
import ChoiceTable from "./ChoiceTable"
import { Row, Col } from "reactstrap"

export default class ListChoiceTable extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="6" className="text-center mb-3">
          <ChoiceTable count="0" image="http://bar-legacy.com/img/main_6.jpg" />
        </Col>
      </Row>
    )
  }
}
