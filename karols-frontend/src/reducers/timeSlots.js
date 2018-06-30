import { CHOOSE_TIMESLOT } from "../actions/actions"
import { TIMESLOTS_RECEIVED } from "../actions/actions"

const initialState = []

const timeSlot = (prevState = initialState, action) => {
  if (action.type === CHOOSE_TIMESLOT) {
    // si l'action est de type CHOOSE_TIMESLOT
    return prevState.map(day => ({
      // retourner prevState et parcourir chaque day
      ...day,
      // destructuration de l'objet
      timeSlots: day.timeSlots.map(timeSlot => ({
        // dans la propriété timeSlots, on parcour chaque timeSlot
        ...timeSlot,
        selected: action.timeSlot.time.s === timeSlot.time.s
        // dans la propriété selected si le s (start) de l'action est égal au s (start) actuel alors il est selected
      }))
    }))
  }
  if (action.type === TIMESLOTS_RECEIVED) {
    return action.response
  }
  return prevState
}
export default timeSlot
