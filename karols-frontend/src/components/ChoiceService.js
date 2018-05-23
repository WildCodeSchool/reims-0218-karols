import React from "react"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"

const ChoiceService = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> Choix du service </CardTitle>
        </CardBody>
        <img
          width="250"
          height="250"
          src="http://via.placeholder.com/250x250"
          alt="Name of service"
        />
        <CardBody>
          <CardText>Un petit descriptif du service ?</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ChoiceService
