import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const ChoicePrestation = () => {
  return (
    <div>
      <Card inverse>
        <img
          className="img-fluid"
          width="250"
          src="http://via.placeholder.com/250x250"
          alt="Prestations"
        />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>Choisissez votre prestation</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoicePrestation
