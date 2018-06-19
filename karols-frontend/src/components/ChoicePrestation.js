import React from "react"
import CardModel from "./CardModel"
import { Row, Col } from "reactstrap"
import Zoom from "react-reveal/Zoom"

const PreparationChoice = ({ id, name, preparations, select, image }) => (
  <div>
    <h5
      style={{
        height: "150px",
        paddingTop: "80px",
        fontSize: "40px"
      }}
    >
      {name}
    </h5>
    <Row className="justify-content-center">
      {preparations.map(preparation => (
        <Col
          key={preparation.id}
          md="6"
          className="text-center mb-6"
          style={{
            height: "325px"
          }}
        >
          <Zoom>
            <CardModel
              key={preparation.id}
              {...preparation}
              title={preparation.titlePreparation}
              image={preparation.image}
              select={preparationId => {
                select(id, preparationId)
              }}
            />
          </Zoom>
        </Col>
      ))}
    </Row>
  </div>
)

export default PreparationChoice
