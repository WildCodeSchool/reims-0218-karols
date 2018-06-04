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
        <DropdownToggle caret>Choisissez votre boutique</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Paris</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Lyon</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Cannes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
