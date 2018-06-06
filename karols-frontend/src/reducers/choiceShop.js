import { CHOOSE_SHOP } from "../actions/actions"

const initialState = []

const choiceShop = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SHOP) {
    return [...prevState, action.shopId]
  }
  return prevState
}

export default choiceShop
