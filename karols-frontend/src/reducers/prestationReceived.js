import { PRESTATIONS_RECEIVED } from "../actions/actions"

const initialState = []

const prestationReceived = (prevState = initialState, action) => {
  if (action.type === PRESTATIONS_RECEIVED) {
    return action.prestations
  }
  return prevState
}

export default prestationReceived
