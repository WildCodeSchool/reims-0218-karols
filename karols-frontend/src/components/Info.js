import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Iframe from "react-iframe"

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
            <Iframe
              url="https://fr.wikipedia.org/wiki/Bob_Marley"
              width="450px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
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
