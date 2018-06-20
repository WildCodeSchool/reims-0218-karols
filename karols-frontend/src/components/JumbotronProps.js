import React from "react"
import JumbotronRecap from "./JumbotronRecap"
import { Row, Col } from "reactstrap"

export default class JumbotronProps extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <JumbotronRecap
            shop="Paris"
            preparation="preparation"
            gender="une Femme"
            prestation="Maquillage ultime"
            prestation2="Coiffure belle gosse"
            horaire="Dimanche à 23H"
          />
        </Col>
      </Row>
    )
  }
}
