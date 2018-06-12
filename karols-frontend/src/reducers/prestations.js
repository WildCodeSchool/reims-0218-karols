import {
  CHOOSE_PRESTATION,
  SHOPS_PRESTATIONS_RECEIVED
} from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    return prevState.map(prestation => ({
      ...prestation,
      selected: action.prestationId === prestation.id
    }))
  }
  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.prestations
  }
  return prevState
}

export default prestations
