import React from "react"
import ReactDOM from "react-dom"
import CardModel, { isOn } from "./CardModel"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardModel />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardModel />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe.only("isOn", () => {
  it("should return true if selected is true and showcounter is false", () => {
    const selected = true
    const showCounter = false
    const count = 0

    expect(isOn(selected, showCounter, count)).toBeTruthy()
  })
  it("should return false if selected is true and showcounter is true and count = 0", () => {
    const selected = true
    const showCounter = true
    const count = 0

    expect(isOn(selected, showCounter, count)).toBeFalsy()
  })
  it("should return true if selected is false and showcounter is true and count > 0", () => {
    const selected = false
    const showCounter = true
    const count = 4

    expect(isOn(selected, showCounter, count)).toBeTruthy()
  })
  it("should return false if selected is false and showcounter is false and count = 0", () => {
    const selected = false
    const showCounter = false
    const count = 0

    expect(isOn(selected, showCounter, count)).toBeFalsy()
  })
})
