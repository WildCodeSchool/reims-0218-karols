import { CHOOSE_SHOP } from "../actions/actions"

const initialState = [
  {
    id: 1,
    city: "Paris",
    adress: "75000",
    image:
      "https://images.unsplash.com/33/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82fecbde67b1966b4ea8118f3bea896e&auto=format&fit=crop&w=967&q=80",
    selected: false
  },
  {
    id: 2,
    city: "Lyon",
    adress: "69000",
    image:
      "https://images.unsplash.com/photo-1496277195689-21125faa0eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=789210ffc73d1822ce69059fcefcabf0&auto=format&fit=crop&w=1050&q=80",
    selected: false
  },
  {
    id: 3,
    city: "Cannes",
    adress: "06150",
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/570547/155126774/stock-photo-image-shows-the-cosmopolitan-city-of-cannes-in-the-french-riviera-155126774.jpg",
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
