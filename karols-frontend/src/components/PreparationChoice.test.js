import React from "react"
import ReactDOM from "react-dom"
import PreparationChoice from "./PreparationChoice"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PreparationChoice preparations={[]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PreparationChoice preparations={[]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
