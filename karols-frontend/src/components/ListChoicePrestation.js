import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import { Row, Col } from "reactstrap"

export default class ListChoicePrestation extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="3" className="text-center mb-3">
          <ChoicePrestation
            title="Maquillage naturel"
            description="Description"
            image="http://cache.marieclaire.fr/data/photo/w500_h250_ci/53/maquillage-peche.jpg"
          />
        </Col>
        <Col lg="3" className="text-center">
          <ChoicePrestation
            title="Maquillage glamour"
            description="Description"
            image="https://s3.amazonaws.com/rose.vero/wp-content/uploads/2017/01/09113800/VERO07_476-500x250.jpg"
          />
        </Col>
        <Col lg="3" className="text-center">
          <ChoicePrestation
            title="Maquillage magique"
            description="Description"
            image="http://astuces-de-mamie.com/wp-content/uploads/2017/04/femme-maquillage-vert.jpg"
          />
        </Col>
        <Col lg="3" className="text-center">
          <ChoicePrestation
            title="Maquillage enfant"
            description="Description"
            image="http://cache.magicmaman.com/data/photo/w500_h250_ci/4s/maquillage-enfant-carnaval.jpg"
          />
        </Col>
      </Row>
    )
  }
}
