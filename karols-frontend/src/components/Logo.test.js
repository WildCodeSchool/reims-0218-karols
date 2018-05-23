import React from "react"
import ReactDOM from "react-dom"
import Logo from "./Logo"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Logo />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<Logo />).toJSON()
  expect(tree).toMatchSnapshot()
})
