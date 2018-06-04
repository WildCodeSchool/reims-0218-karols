import { CHOICE_PRESTATION, makeChoicePrestation } from "./actions"

describe("action to choose a prestation", () => {
  it("should return an choice of a prestation with a prestation id", () => {
    const expected = {
      type: CHOICE_PRESTATION,
      prestationId: 2
    }

    expect(makeChoicePrestation(2)).toEqual(expected)
  })
})
