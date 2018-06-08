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
      <Card
        inverse
        className="text-center"
        style={{
          borderRadius: "10px"
        }}
      >
        <CardImg
          width="100%"
          src={
            "https://www.sciencesetavenir.fr/assets/img/2016/06/22/cover-r4x3w1000-57e16d3d093c3-coucou.jpg"
          }
        />
        <CardImgOverlay>
          <CardTitle
            style={{
              margin: "20px",
              fontSize: "2em"
            }}
          >
            {"Droian"}
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.5em"
            }}
          >
            {"le prix est de 03393 euros "}
          </CardText>
        </CardImgOverlay>
        <CardFooter>
          <Button className="btn-danger">Choisir ce service</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ChoiceService
