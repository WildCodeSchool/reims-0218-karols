import { CHOOSE_SHOP } from "../actions/actions"

const initialState = [
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
