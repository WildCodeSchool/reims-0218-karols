import shops from "./shops"

describe("shops", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Paris"
      },
      {
        id: 2,
        name: "Lyon"
      },
      {
        id: 3,
        name: "Cannes"
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(shops(prevState, anyAction)).toEqual(prevState)
  })
})
