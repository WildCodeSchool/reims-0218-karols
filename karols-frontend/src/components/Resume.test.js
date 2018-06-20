import React from "react"
import ReactDOM from "react-dom"
import Resume from "./Resume"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Resume />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<Resume />).toJSON()
  expect(tree).toMatchSnapshot()
})
