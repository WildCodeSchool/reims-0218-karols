import { makeChooseSex, CHOOSE_SEX } from "../actions/actions"

import genders from "./genders"

describe("genders", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Homme",
        selected: false
      },
      {
        id: 2,
        name: "Femme",
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
        id: 1,
        name: "Homme",
        selected: false
      },
      {
        id: 2,
        name: "Femme",
        selected: false
      }
    ]
    const expectedState = [
      {
        id: 1,
        name: "Homme",
        selected: true
      },
      {
        id: 2,
        name: "Femme",
        selected: false
      }
    ]

    const action = makeChooseSex(1)
    expect(genders(prevState, action)).toEqual(expectedState)
  })
})
