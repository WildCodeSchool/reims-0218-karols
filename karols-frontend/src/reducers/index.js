import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"
import shops from "./shops"

export default combineReducers({
  prestations,
  services,
  shops
})
