import React from "react"
import ReactDOM from "react-dom"
import ListChoiceService from "./ListChoiceService"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListChoiceService />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListChoiceService />).toJSON()
  expect(tree).toMatchSnapshot()
})
