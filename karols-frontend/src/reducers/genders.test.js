import { makeChooseSex, CHOOSE_SEX } from "../actions/actions"

import genders from "./genders"

describe("genders", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        sex: "M",
        selected: false
      },
      {
        sex: "F",
        selected: false
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(genders(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for choose gender action", () => {
    const prevState = [
      {
        sex: "M",
        selected: false
      },
      {
        sex: "F",
        selected: false
      }
    ]
    const expectedState = [
      {
        sex: "M",
        selected: true
      },
      {
        sex: "F",
        selected: false
      }
    ]

    const action = makeChooseSex("M")
    expect(genders(prevState, action)).toEqual(expectedState)
  })
})
