import { PRESTATIONS_RECEIVED } from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === PRESTATIONS_RECEIVED) {
    return action.response
  }
  return prevState
}

export default prestations
