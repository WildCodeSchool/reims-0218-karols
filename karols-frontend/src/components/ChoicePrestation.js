import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

// Display card when it's normal state

const ChoicePrestation = ({ name, imageSrc, description }) => {
  return (
    <div className="mb-4">
      <Card inverse>
        <img
          className="img-fluid"
          width="500"
          height="250"
          src={imageSrc}
          alt="Name of service"
        />

        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: "2em"
            }}
          >
            {name}
          </CardTitle>
          <CardText>{description}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoicePrestation
