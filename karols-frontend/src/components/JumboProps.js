import React from "react"
import JumboRecap from "./JumboRecap"
import { Row, Col } from "reactstrap"

export default class JumboProps extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <JumboRecap
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
