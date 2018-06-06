import { CHOOSE_TIMESLOT } from "../actions/actions"

const initialState = []

const timeSlot = (prevState = initialState, action) => {
  if (action.type === CHOOSE_TIMESLOT) {
    return prevState.map(timeSlot => ({
      ...timeSlot,
      selected: action.timeSlotId === timeSlot.id
    }))
  }
  return prevState
}

export default timeSlot
