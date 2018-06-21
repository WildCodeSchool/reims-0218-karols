import { CHOOSE_TIMESLOT } from "../actions/actions"
import { TIMESLOTS_RECEIVED } from "../actions/actions"

const initialState = []

const timeSlot = (prevState = initialState, action) => {
  if (action.type === CHOOSE_TIMESLOT) {
    return prevState.map(timeSlot => ({
      ...timeSlot,
      selected: action.timeSlot === timeSlot.id
    }))
  }
  if (action.type === TIMESLOTS_RECEIVED) {
    return action.response
  }
  return prevState
}

export default timeSlot
