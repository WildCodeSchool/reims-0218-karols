import React from "react"
import ReactDOM from "react-dom"
import Page from "./Page"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Page />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<Page />).toJSON()
  expect(tree).toMatchSnapshot()
})
