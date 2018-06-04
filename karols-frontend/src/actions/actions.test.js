import { SELECTED_CHOICESHOP, makeChoseChoiceShopAction } from "./actions"

describe("action selected shop", () => {
  it("should return an SELECTED_CHOICESHOP action", () => {
    const expected = {
      type: SELECTED_CHOICESHOP,
      shopId: 1
    }

    expect(makeChoseChoiceShopAction(1)).toEqual(expected)
  })
})
