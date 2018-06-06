import { CHOOSE_SEX } from "../actions/actions"

const initialState = []

const genders = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SEX) {
    return prevState.map(sex => ({
      ...sex,
      selected: action.sexId === sex.id
    }))
  }
  return prevState
}

export default genders
