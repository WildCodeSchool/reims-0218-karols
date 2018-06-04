import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const ChoicePrestation = () => {
  return (
    <div className="mb-4">
      <Card inverse>
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1520173043194-dc6b2a237fee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9da78404d02fafbd40afdf2b59dc2d9d&auto=format&fit=crop&w=800&q=60"
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
