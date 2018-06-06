import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"

export default combineReducers({
  prestations,
  services
})
