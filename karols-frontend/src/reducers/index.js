import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"
import shops from "./shops"
import reservation from "./reservation"
import genders from "./genders"
import timeSlots from "./timeSlots"
import countPeopleTable from "./countPeopleTable"
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  prestations,
  services,
  shops,
  genders,
  reservation,
  timeSlots,
  form: formReducer,
  countPeopleTable
})
