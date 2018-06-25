import React from "react"
import ReactDOM from "react-dom"
import SelectClient from "./SelectClient"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SelectClient />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<SelectClient />).toJSON()
  expect(tree).toMatchSnapshot()
})
