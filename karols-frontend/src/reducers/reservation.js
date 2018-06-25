import { SUCCESS_RESERVATION } from "../actions/actions"

const initialState = {
  success: false
}
const reservation = (prevState = initialState, action) => {
  if (action.type === SUCCESS_RESERVATION) {
    return {
      ...prevState,
      success: true
    }
  }
  return prevState
}

export default reservation
