import React from "react"
import ChoiceShop from "./ChoiceShop"
import { Row, Col } from "reactstrap"

export default class ListChoiceShop extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" className="text-center mb-3">
          <ChoiceShop
            city="Paris"
            adress="75000"
            image="https://images.unsplash.com/33/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fecbde67b1966b4ea8118f3bea896e&auto=format&fit=crop&w=967&q=80"
          />
        </Col>
        <Col lg="4" className="text-center">
          <ChoiceShop
            city="Lyon"
            adress="69000"
            image="https://images.unsplash.com/photo-1496277195689-21125faa0eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=789210ffc73d1822ce69059fcefcabf0&auto=format&fit=crop&w=1050&q=80"
          />
        </Col>
        <Col lg="4" className="text-center">
          <ChoiceShop
            city="Cannes"
            adress="06150"
            image="https://thumbs.dreamstime.com/z/ville-de-cannes-france-2627857.jpg"
          />
        </Col>
      </Row>
    )
  }
}
