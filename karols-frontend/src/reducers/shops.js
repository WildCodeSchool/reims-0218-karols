import { CHOOSE_SHOP, SHOPS_PRESTATIONS_RECEIVED } from "../actions/actions"

const initialState = []

const shops = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SHOP) {
    return prevState.map(shop => ({
      ...shop,
      selected: action.shopId === shop.id
    }))
  }
  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.shops  
  }
  return prevState
}

export default shops
