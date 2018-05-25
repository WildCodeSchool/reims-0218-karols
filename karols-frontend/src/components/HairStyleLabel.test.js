import React from "react"
import ReactDOM from "react-dom"
import HairStyleLabel from "./HairStyleLabel"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<HairStyleLabel />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<HairStyleLabel />).toJSON()
  expect(tree).toMatchSnapshot()
})
