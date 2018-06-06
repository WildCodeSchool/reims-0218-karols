import { makeChooseService } from "../actions/actions"
import services from "./services"

describe("services", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Préparation",
        selected: false
      },
      {
        id: 2,
        name: "Table",
        selected: false
      },
      {
        id: 3,
        name: "Table + préparation",
        selected: false
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(services(prevState, anyAction)).toEqual(prevState)
  })
})
