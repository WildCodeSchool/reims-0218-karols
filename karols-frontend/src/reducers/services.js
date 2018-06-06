import { CHOOSE_SERVICE } from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Préparation",
    selected: false
  },
  {
    id: 2,
    name: "Table",
    selected: false
  },
  {
    id: 3,
    name: "Table + préparation",
    selected: false
  }
]

const services = (prevState = initialState, action) => {
  return prevState
}

export default services
