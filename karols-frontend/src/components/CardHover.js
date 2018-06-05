import React, { Component } from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                {this.state.isHovering && <CardTitle> Card Title</CardTitle>}
                {this.state.isHovering && (
                  <CardText>Ca fonctionne plutôt bien</CardText>
                )}
                {this.state.isHovering && (
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                )}
              </CardImgOverlay>
            </Card>
          </div>
        </div>
        {this.state.isHovering && <div />}
      </div>
    )
  }
}

export default CardHover
//{this.state.isHovering && (
