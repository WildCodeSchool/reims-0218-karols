import { CHOOSE_SERVICE } from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Préparation"
  },
  {
    id: 2,
    name: "Table"
  },
  {
    id: 3,
    name: "Table + préparation"
  }
]

const services = (prevState = initialState, action) => {
  return prevState
}

export default services
