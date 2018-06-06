import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

export default class ChoiceShop extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Dropdown
        className="mt-3 mb-4"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle
          caret
          style={{
            fontSize: "1.5em"
          }}
        >
          Votre boutique
        </DropdownToggle>
        <DropdownMenu
          className="text-center"
          style={{
            fontSize: "1.5em"
          }}
        >
          <DropdownItem
            style={{
              width: "200px"
            }}
          >
            Paris
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Lyon</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Cannes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
