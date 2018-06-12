import { CHOOSE_SHOP } from "../actions/actions"

const initialState = []

const shops = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SHOP) {
    return prevState.map(shop => ({
      ...shop,
      selected: action.shopId === shop.id
    }))
  }
  return prevState
}

export default shops
