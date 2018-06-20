import React from "react"
import ReactDOM from "react-dom"
import JumbotronRecap from "./JumbotronRecap"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<JumbotronRecap />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<JumbotronRecap />).toJSON()
  expect(tree).toMatchSnapshot()
})
