import React from "react"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardFooter
} from "reactstrap"

const ChoiceService = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> Choix du service </CardTitle>
        </CardBody>
        <a href="">
          <img
            className="img-fluid"
            width="250"
            height="250"
            src="http://via.placeholder.com/250x250"
            alt="Name of service"
          />
        </a>
        <CardBody>
          <CardText>Un petit descriptif du service ?</CardText>
        </CardBody>
        <CardFooter>
          <Button> Choisir ce service </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ChoiceService
