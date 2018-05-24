import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PrestationLabel from "./PrestationLabel"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PrestationLabel />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PrestationLabel />).toJSON()
  expect(tree).toMatchSnapshot()
})
