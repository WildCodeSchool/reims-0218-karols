import { makeChooseShop, CHOOSE_SHOP } from "../actions/actions"

import shops from "./shops"

describe("shops", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Paris",
        selected: false
      },
      {
        id: 2,
        name: "Lyon",
        selected: false
      },
      {
        id: 3,
        name: "Cannes",
        selected: false
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(shops(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for choose action", () => {
    const prevState = [
      {
        id: 1,
        name: "Paris",
        selected: false
      },
      {
        id: 2,
        name: "Lyon",
        selected: false
      },
      {
        id: 3,
        name: "Cannes",
        selected: false
      }
    ]
    const expectedState = [
      {
        id: 1,
        name: "Paris",
        selected: false
      },
      {
        id: 2,
        name: "Lyon",
        selected: true
      },
      {
        id: 3,
        name: "Cannes",
        selected: false
      }
    ]

    const action = makeChooseShop(2)
    expect(shops(prevState, action)).toEqual(expectedState)
  })
})
