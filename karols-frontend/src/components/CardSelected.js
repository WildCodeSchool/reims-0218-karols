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

const CardSelected = ({ name, description, image }) => {
  return (
    <div>
      <Card inverse className="text-center">
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
          <Button className="btn" color="primary" size="lg" block>
            Choisir
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardSelected
