import { combineReducers } from "redux"

import choiceShop from "./choiceShop"
import shops from "./shops"

export default combineReducers({
  choiceShop,
  shops
})
