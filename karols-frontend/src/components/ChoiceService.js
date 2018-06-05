import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardFooter,
  Button
} from "reactstrap"

const ChoiceService = ({ name, description, image }) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={image} />
        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: "2em"
            }}
          >
            {name}
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.5em"
            }}
          >
            {description}
          </CardText>
        </CardImgOverlay>
        <CardFooter>
          <Button color="default" size="lg" block>
            Choisir ce service
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ChoiceService
