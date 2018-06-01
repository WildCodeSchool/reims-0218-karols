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

const CardHover = ({ name, description, image }) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={image} />
        <CardImgOverlay-hover>
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
        </CardImgOverlay-hover>
        <CardFooter>
          <Button color="default" size="lg" block>
            Choisir
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardHover
