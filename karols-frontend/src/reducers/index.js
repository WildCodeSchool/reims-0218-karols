import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"
import shops from "./shops"
import genders from "./genders"
import timeSlots from "./timeSlots"
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  prestations,
  services,
  shops,
  genders,
  timeSlots,
  form: formReducer
})
