import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button
          style={{
            width: "100px",
            height: "30px",
            opacity: "0.5"
          }}
          color="grey"
          onClick={this.toggle}
        >
          <p
            style={{
              position: "relative",
              top: "50%",
              webkitTransform: "translateY(-20%)",
              mozTransform: "translateY(-20%)",
              msTransform: "translateY(-20%)",
              oTransform: "translateY(-20%)",
              transform: "translateY(-20%)"
            }}
          >
            Description
          </p>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Description</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Retour
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Info
