import React, { Component } from "react"
import {
  Card,
  CardImg,
  CardFooter,
  CardText,
  CardTitle,
  CardImgOverlay,
  Button
} from "reactstrap"

class CardHover extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false
    }
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }
  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <div>
            <Card inverse>
              <div>
                <CardImg
                  width="100%"
                  src="http://www.lespiedssurterre.fr/wp-content/uploads/2017/09/MissCoiffure-choix.jpg"
                  alt="Card image cap"
                />
                <CardImgOverlay className="text-center">
                  <CardTitle
                    style={{
                      fontSize: "2em"
                    }}
                  >
                    Titre !
                  </CardTitle>
                  {this.state.isHovering && (
                    <CardText
                      style={{
                        paddingTop: "10px",
                        fontSize: "1.5em"
                      }}
                    >
                      Ca fonctionne plutôt bien
                    </CardText>
                  )}
                </CardImgOverlay>
              </div>
              <CardFooter>
                <Button color="default" size="lg" block>
                  Choisir ce service
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default CardHover
//{this.state.isHovering && (
