import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const ChoicePrestation = ({ imgSrc, name }) => {
  return (
    <div className="mb-4">
      <Card inverse>
        <img className="img-fluid" src={imgSrc} alt={name} />
        <CardImgOverlay>
          <CardTitle> {name}</CardTitle>
          <CardText>Choisissez votre prestation</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoicePrestation
