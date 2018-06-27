import { CHOOSE_COUNT_PEOPLE } from "../actions/actions"

const initialState = {
  count: 0
}
const countPeopleTable = (prevState = initialState, action) => {
  if (action.type === CHOOSE_COUNT_PEOPLE) {
    return {
      ...prevState,
      count: action.count
    }
  }
  return prevState
}

export default countPeopleTable
