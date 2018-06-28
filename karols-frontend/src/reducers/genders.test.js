import { makeChooseSex, makeIncrementSex } from "../actions/actions"

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

describe("gendersCount", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        sex: "M",
        selected: false,
        count: 0
      },
      {
        sex: "F",
        selected: false,
        count: 0
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(genders(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for increment gender action", () => {
    const prevState = [
      {
        sex: "M",
        selected: false,
        count: 0
      },
      {
        sex: "F",
        selected: false,
        count: 0
      }
    ]
    const expectedState = [
      {
        sex: "M",
        selected: false,
        count: 1
      },
      {
        sex: "F",
        selected: false,
        count: 0
      }
    ]
    const action = makeIncrementSex("M")
    expect(genders(prevState, action)).toEqual(expectedState)
  })
})
