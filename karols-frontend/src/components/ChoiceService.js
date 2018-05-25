import React from "react"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardFooter
} from "reactstrap"

const ChoiceService = ({ name, description, image }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> {name} </CardTitle>
        </CardBody>
        <a href="">
          <img
            className="img-fluid"
            width="250"
            height="250"
            src={image}
            alt="Name of service"
          />
        </a>
        <CardBody>
          <CardText> {description} </CardText>
        </CardBody>
        <CardFooter>
          <Button> Choisir ce service </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ChoiceService
