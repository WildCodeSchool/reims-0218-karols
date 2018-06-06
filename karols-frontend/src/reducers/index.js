import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"
import shops from "./shops"
import genders from "./genders"

export default combineReducers({
  prestations,
  services,
  shops,
  genders
})
