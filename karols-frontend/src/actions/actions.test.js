import { CHOOSE_SERVICE, makeChooseServiceAction } from "./actions"

describe("action choose service creator", () => {
  it("should return an CHOOSE_SERVICE action with serviceId", () => {
    const expected = {
      type: CHOOSE_SERVICE,
      serviceId: 1
    }

    expect(makeChooseServiceAction(1)).toEqual(expected)
  })
})
