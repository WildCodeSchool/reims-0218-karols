import React from "react"
import CardModel from "./CardModel"
import { Row, Col } from "reactstrap"

const PreparationChoice = ({ id, name, preparations, select, image }) => (
  <div>
    <h5>{name}</h5>
    <Row className="justify-content-center">
      {preparations.map(preparation => (
        <Col key={preparation.id} md="3" className="text-center mb-3">
          <CardModel
            {...preparation}
            title={preparation.titlePreparation}
            image={preparation.image}
            select={preparationId => {
              select(id, preparationId)
            }}
          />
        </Col>
      ))}
    </Row>
  </div>
)

export default PreparationChoice
