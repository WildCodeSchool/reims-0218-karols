import React from "react"
import CardModel from "./CardModel"
import { Row, Col } from "reactstrap"

const PreparationChoice = ({ id, name, preparations, select }) => (
  <div>
    <h5>{name}</h5>
    <Row className="justify-content-center">
      {preparations.map(preparation => (
        <Col md="3" className="text-center mb-3">
          <CardModel
            key={preparation.id}
            {...preparation}
            title={preparation.titlePreparation}
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
