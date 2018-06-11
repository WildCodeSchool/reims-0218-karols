import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

// Display card when it's normal state

const ChoicePrestation = ({ image, description, title }) => {
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
              fontSize: "2em",
              color: "black"
            }}
          >
            {title}
          </CardTitle>
          <CardText>{description}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoicePrestation
