import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const ChoiceShop = ({ city, image, adresse }) => {
  return (
    <div className="mb-4">
      <Card inverse>
        <img
          className="img-fluid"
          width="500"
          height="250"
          src={image}
          alt="Name of service"
        />

        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: "2em"
            }}
          >
            {city}
          </CardTitle>
          <CardText>{adresse}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoiceShop
